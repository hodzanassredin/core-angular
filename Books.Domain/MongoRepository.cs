using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;

namespace Books.Domain
{
    public abstract class MongoEntity {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
    }
    public class MongoRepository<T> : IRepository<T, string>
        where T : MongoEntity
    {
        private IMongoCollection<T> collection;
        public MongoRepository(IMongoCollection<T> collection)
        {
            this.collection = collection;
        }
        public Task Insert(T e)
        {
            return this.collection.InsertOneAsync(e);
        }

        public async Task<T> Get(string id)
        {
            var res = await collection.FindAsync(IdFilter(id));
            return res.FirstOrDefault();
        }

        public async Task<Paged<T>> GetAll(int pageSize, int page)
        {
            var filter = Builders<T>.Filter.And(new List<FilterDefinition<T>>());
            var query = collection.Find(filter);
            var totalTask = query.CountAsync();
            var itemsTask = query.Skip(page * pageSize).Limit(pageSize).ToListAsync();
            await Task.WhenAll(totalTask, itemsTask);
            return new Paged<T>
            {
                TotalItems = totalTask.Result,
                Items = itemsTask.Result,
                CurrentPage = page,
                PageSize = pageSize
            };
        }

        private FilterDefinition<T> IdFilter(string id) {
            return Builders<T>.Filter.Eq("Id", ObjectId.Parse(id));
        }

        public Task Delete(T e)
        {
            return collection.DeleteOneAsync(IdFilter(e.Id));
        }

        public Task Update(T e)
        {
            return collection.ReplaceOneAsync(IdFilter(e.Id), e);
        }

        public IQueryable<T> AsQueryable()
        {
            return this.collection.AsQueryable();
        }

        public async Task<Paged<T>> Search(FilterDefinition<T> filter, int pageSize = 10, int page = 0)
        {
            var query = this.collection.Find(filter);
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
    }
}
