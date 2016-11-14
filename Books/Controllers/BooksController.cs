using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Books.Domain.Models;
using Books.Domain.Services;
using Books.Domain;

namespace Books.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        ISearchService search;
        public BooksController(ISearchService searchService)
        {
            if (searchService == null) throw new ArgumentNullException("searchService");
            search = searchService;
        }
        [HttpGet("[action]")]
        public Task<Paged<Book>> Search(BookFilter filter)
        {
            return search.Search(filter);
        }
    }
}
