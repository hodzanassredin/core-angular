using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Books.Domain.Models;
using MongoDB.Driver.Linq;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Books.Domain.Services
{
    public class MongoSearchService : ISearchService
    {
        private readonly MongoRepository<Book> repo;
        public MongoSearchService(IDataContext ctx)
        {
            this.repo = (MongoRepository<Book>)ctx.Books;//todo remove dependency on mongofilters
        }
        public Task<Paged<Book>> Search(BookFilter filter)
        {
            var builder = Builders<Book>.Filter;
            var filters = new List<FilterDefinition<Book>>();
            if (!String.IsNullOrWhiteSpace(filter.Title))
            {
                filters.Add(builder.Eq("Title", new BsonRegularExpression(filter.Title)));
            }
            if (!String.IsNullOrWhiteSpace(filter.Publisher))
            {
                filters.Add(builder.Eq("Publisher", new BsonRegularExpression(filter.Publisher)));
            }
            if (!String.IsNullOrWhiteSpace(filter.Description))
            {
                filters.Add(builder.Eq("Description", new BsonRegularExpression(filter.Description)));
            }
            if (!String.IsNullOrWhiteSpace(filter.Author))
            {
                filters.Add(builder.Eq("Authors", new BsonRegularExpression(filter.Author)));
            }
            return this.repo.Search(builder.And(filters), filter.PageSize, filter.Page);
        }
    }
}
