using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Books.Domain.Models;
using Books.Domain.Repositories;
using MongoDB.Driver;
using System.Collections;
using System.Linq;

namespace Books.Domain.MongoImpl
{
    public class UserRepository : MongoRepository<User>, IUserRepository
    {
        IMongoCollection<Book> books;
        public UserRepository(IMongoCollection<User> coll, IMongoCollection<Book> books) : base(coll)
        {
            this.books = books;
        }

        public Task<User> GetByUserName(string name)
        {
            return collection.SearchSingle(Builders<User>.Filter.Eq("Username", name));
        }

        public Task<IEnumerable<Book>> GetRequests(User user)
        {
            if (user.Demands == null || user.Demands.Count == 0)
            {
                return Task.FromResult(Enumerable.Repeat<Book>(null,0));
            }

            return this.books.GetByIds(user.Demands);
        }

        public async Task<User> Login(string user, string password)
        {
            var u = await this.GetByUserName(user);
            if (u == null) return null;
            if (u.Password != password) return null;
            return u;
        }

        public async Task<RegisterResult> Register(User user)
        {
            if (String.IsNullOrWhiteSpace(user.Password)) return RegisterResult.BadPassword;
            var u = await GetByUserName(user.Username);
            if (u != null) return RegisterResult.UserAlreadyExists;
            await this.Insert(user);
            return RegisterResult.Ok;
        }
    }
}
