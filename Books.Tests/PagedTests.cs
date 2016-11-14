using Books.Domain.Models;
using Xunit;

namespace Books.Tests
{

    public class PagedTests
    {
        [Fact]
        public void ShouldHaveTotalPages1WhenItemsCountIsLessThanPageSize()
        {
            var p = new Paged<int>() {
                CurrentPage = 0,
                Items = new[] { 0, 0, 0 },
                PageSize = 10,
                TotalItems = 3
            };

            Assert.Equal(1, p.TotalPages);
        }

        [Fact]
        public void ShouldHaveTotalPagesZeroWhenItemsCountIsZero()
        {
            var p = new Paged<int>()
            {
                CurrentPage = 0,
                Items = new int[] {  },
                PageSize = 10,
                TotalItems = 0
            };

            Assert.Equal(0, p.TotalPages);
        }

        [Fact]
        public void ShouldHavePrevPageWhenCurrentPageIsNotZero()
        {
            var p = new Paged<int>()
            {
                CurrentPage = 1,
                Items = new int[] { },
                PageSize = 10,
                TotalItems = 10
            };

            Assert.Equal(true, p.HasPrevPage);
        }

        //todo tests

    }
}
