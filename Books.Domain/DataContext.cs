using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using Books.Domain.Models;
using MongoDB.Driver.Linq;
using Books.Domain;
using MongoDB.Bson;

namespace Books.Domain
{
    public class DataContext : IDataContext
    {
        MongoClient client;
        IMongoDatabase database;

        public DataContext(string connectionString)
        {
            var con = new MongoUrlBuilder(connectionString);

            client = new MongoClient(connectionString);
            database = client.GetDatabase(con.DatabaseName);
        }

        public IRepository<Book, string> Books
        {
            get { return new MongoRepository<Book>(database.GetCollection<Book>("Book")); }
        }

        public IRepository<User, string> Users
        {
            get { return new MongoRepository<User>(database.GetCollection<User>("User")); }
        }
    }
}
