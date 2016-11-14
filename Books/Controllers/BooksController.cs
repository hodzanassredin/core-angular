using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Books.Domain.Models;
using Books.Domain;
using Books.Domain.Repositories;

namespace Books.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        IBookRepository books;
        public BooksController(IBookRepository books)
        {
            if (books == null) throw new ArgumentNullException("searchService");
            this.books = books;
        }
        [HttpGet("[action]")]
        public Task<Paged<Book>> Search(BookFilter filter)
        {
            return books.Search(filter);
        }
    }
}
