using MongoDB.Driver;
using System.Threading.Tasks;
using System.Linq;
using Books.Domain.Models;
using System.Collections.Generic;
using MongoDB.Bson;

namespace Books.Domain.MongoImpl
{
    public static class MongoHelpers
    {
        public static async Task<Paged<T>> SearchPaged<T>(this IMongoCollection<T> coll, FilterDefinition<T> filter, int pageSize = 10, int page = 0)
        {
            var query = coll.Find(filter);
            var totalTask = query.CountAsync();
            var itemsTask = query.Skip(page * pageSize)
                                 .Limit(pageSize)
                                 .ToListAsync();
            await Task.WhenAll(totalTask, itemsTask);
            return new Paged<T>
            {
                TotalItems = totalTask.Result,
                Items = itemsTask.Result,
                CurrentPage = page,
                PageSize = pageSize
            };
        }

        public static async Task<IEnumerable<T>> Search<T>(this IMongoCollection<T> coll, FilterDefinition<T> filter)
        {
            var query = coll.Find(filter);
            var totalTask = query.CountAsync();
            return await query.ToListAsync();
        }

        public static async Task<T> SearchSingle<T>(this IMongoCollection<T> coll, FilterDefinition<T> filter)
        {
            var query = coll.Find(filter);
            var items = await query.Limit(1).ToListAsync();
            return items.SingleOrDefault();
        }

        public static Task<IEnumerable<T>> GetByIds<T>(this IMongoCollection<T> coll, IEnumerable<string> ids)
        {
            return coll.Search(Builders<T>.Filter.In("Id", ids.Select(ObjectId.Parse)));
        }
    }
}
