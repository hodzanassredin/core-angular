namespace Books.Domain.Models
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
}