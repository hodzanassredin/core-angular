using System.Collections.Generic;

namespace Books.Domain
{
    /// <summary>
    /// Dto object for paged responses
    /// </summary>
    /// <typeparam name="T">Item type</typeparam>
    public class Paged<T> 
    {
        public IEnumerable<T> Items { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public long TotalItems { get; set; }
        public int TotalPages { get {
                if (TotalItems == 0) return 0;
                if (TotalItems % PageSize == 0) return (int)(TotalItems / PageSize);
                return (int)(TotalItems / PageSize) + 1; }
        }
        public bool HasNextPage { get { return TotalPages > (CurrentPage + 1); } }
        public bool HasPrevPage { get { return CurrentPage > 0; } }
    }
}
