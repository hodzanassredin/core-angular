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
    public class MongoUserService : IUserService
    {
        private readonly MongoRepository<User> usersRepo;
        private readonly MongoRepository<Book> booksRepo;
        public MongoUserService(IDataContext ctx)
        {
            this.usersRepo = (MongoRepository<User>)ctx.Users;//todo remove dependency on mongofilters
            this.booksRepo = (MongoRepository<Book>)ctx.Books;//todo remove dependency on mongofilters
        }
        private async Task<User> GetByName(string user) {
            var users = await usersRepo.Search(Builders<User>.Filter.Eq("Username", user));
            return users.Items.SingleOrDefault();
        }
        /// <summary>
        /// Add user book request
        /// </summary>
        /// <param name="user"></param>
        /// <param name="bookId"></param>
        /// <returns></returns>
        //todo add errors
        public async Task Request(string user, string bookId)
        {
            var u = await GetByName(user);
            if (u != null) {
                u.Demands.Add(bookId);
                await usersRepo.Update(u);
            }
        }

        /// <summary>
        /// Cancel use book request
        /// </summary>
        /// <param name="user"></param>
        /// <param name="bookId"></param>
        /// <returns></returns>
        public async Task Cancel(string user, string bookId)
        {
            var u = await GetByName(user);
            if (u != null)
            {
                u.Demands.Remove(bookId);
                await usersRepo.Update(u);
            }
        }
        //todo add errors
        /// <summary>
        /// Get all user book requests
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public async Task<IEnumerable<Book>> GetRequests(string user)
        {
            var u = await GetByName(user);
            if (u != null)
            {
                if (u.Demands == null) {
                    return new List<Book>();
                }

                var books = await booksRepo.Search(Builders<Book>.Filter.In("Id", u.Demands.Select(ObjectId.Parse)), 100);
                return books.Items;
            }
            return Enumerable.Repeat<Book>(null, 0);
        }

        public async Task<bool> Login(string user, string password)
        {
            var uf = Builders<User>.Filter.Eq("Username", user);
            var pf = Builders<User>.Filter.Eq("Password", password);
            var users = await usersRepo.Search(Builders<User>.Filter.And(uf,pf));
            var u = users.Items.SingleOrDefault();
            return u != null;
        }

        public async Task<RegisterResult> Register(string user, string password)
        {
            if (String.IsNullOrWhiteSpace(password)) return RegisterResult.BadPassword;
            var u = await GetByName(user);
            if (u != null) return RegisterResult.UserAlreadyExists;
            await usersRepo.Insert(new User()
            {
                Demands = new List<string>(),
                Password = password,
                Username = user
            });
            return RegisterResult.Ok;
        }
    }
}
