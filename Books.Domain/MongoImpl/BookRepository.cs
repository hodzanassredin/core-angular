using Books.Domain.Models;
using Books.Domain.Repositories;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books.Domain.MongoImpl
{
    
    public class BookRepository : MongoRepository<Book>, IBookRepository
    {
        public BookRepository(IMongoCollection<Book> coll) : base(coll)
        {

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
            return this.collection.SearchPaged(builder.And(filters), filter.PageSize, filter.Page);
        }
    }
}
