using Books.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Books.Domain.Repositories
{
    public enum RegisterResult
    {
        Ok,
        UserAlreadyExists,
        BadPassword
    }
    public interface IUserRepository : IRepository<User, string> {
        Task<User> GetByUserName(string name);
        Task<User> Login(string user, string password);
        Task<RegisterResult> Register(User user);
        Task<IEnumerable<Book>> GetRequests(User user);
    }
}
