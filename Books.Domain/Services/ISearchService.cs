using Books.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books.Domain.Services
{
    public class BookFilter
    {
        public BookFilter()
        {
            PageSize = 20;
        }
        public string Title { get; set; }
        public string Publisher { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        //zero based numbering
        public int Page { get; set; }
        public int PageSize { get; set; }
    }

    public interface ISearchService
    {
        Task<Paged<Book>> Search(BookFilter filter);
    }
}
