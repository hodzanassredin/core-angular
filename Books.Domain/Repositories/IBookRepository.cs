using Books.Domain.Models;
using System.Threading.Tasks;

namespace Books.Domain.Repositories
{
    public interface IBookRepository : IRepository<Book, string> {
        Task<Paged<Book>> Search(BookFilter filter);
    }
}
