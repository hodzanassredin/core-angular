using Books.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books.Domain.Services
{
    public enum RegisterResult {
        Ok,
        UserAlreadyExists,
        BadPassword
    }

    public interface IUserService
    {
        Task<bool> Login(string user, string password);
        Task<RegisterResult> Register(string user, string password);
        Task<IEnumerable<Book>> GetRequests(string user);
        Task Request(string user, string bookId);
        Task Cancel(string user, string bookId);
    }
}
