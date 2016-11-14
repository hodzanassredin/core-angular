using Books.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Books.Domain.Repositories
{
    //todo rethink generalizationL remode dependencies on mongo details(filters, ids)
    public interface IRepository<T,TId>
    {
        Task<Paged<T>> GetAll(int pageSize, int page);
        Task<T> Get(TId id);
        Task Insert(T e);
        Task Update(T e);
        Task Delete(T e);
        IQueryable<T> AsQueryable();
    }
}
