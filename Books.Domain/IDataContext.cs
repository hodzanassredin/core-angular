using Books.Domain.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Books.Domain
{
    public interface IDataContext
    {
        IRepository<Book, string> Books { get; }
        IRepository<User, string> Users { get; }
    }
}