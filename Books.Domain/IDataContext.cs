using Books.Domain.Models;
using Books.Domain.Repositories;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Books.Domain
{
    public interface IDataContext
    {
        IBookRepository Books { get; }
        IUserRepository Users { get; }
    }
}