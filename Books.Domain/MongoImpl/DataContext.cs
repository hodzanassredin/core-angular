using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using Books.Domain.Models;
using MongoDB.Driver.Linq;
using Books.Domain;
using MongoDB.Bson;
using Books.Domain.MongoImpl;
using Books.Domain.Repositories;

namespace Books.Domain.MongoImpl
{
    public class DataContext : IDataContext
    {
        MongoClient client;
        IMongoDatabase database;
        IMongoCollection<Book> books;
        IMongoCollection<User> users;

        public DataContext(string connectionString)
        {
            var con = new MongoUrlBuilder(connectionString);

            client = new MongoClient(connectionString);
            database = client.GetDatabase(con.DatabaseName);
            books = database.GetCollection<Book>("Book");
            users = database.GetCollection<User>("User");
        }

        public IBookRepository Books
        {
            get { return new BookRepository(books); }
        }

        public IUserRepository Users
        {
            get { return new UserRepository(users, books); }
        }
    }
}
