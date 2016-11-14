import { Component } from '@angular/core';
import { BooksService, PagedBooks, Filter } from '../common/books.service';

@Component({
    selector: 'books',
    template: require('./books.component.html')
})
export class BooksComponent {
    public pagedBoooks: PagedBooks;

    public currentFilter = new Filter("", "", "", "", 0, 10);
    public pageNumbers = []
    constructor(private booksService: BooksService) {
        this.reloadData();
    }

    public loadPage(i) {
        if (i != this.pagedBoooks.currentPage && i >= 0 && i < this.pagedBoooks.totalPages) {
            this.currentFilter.page = i;
            this.requestServer();
        }
    }
    public reloadData() {
        this.currentFilter.page = 0;
        this.requestServer();
    }

    public requestServer() {
        //this.pagedBoooks = null;

        this.booksService.search(this.currentFilter).then(result => {
            this.pagedBoooks = result;
            let startPage = Math.max(1, this.pagedBoooks.currentPage - 4);
            let endPage = Math.min(this.pagedBoooks.totalPages, startPage + 9);
            this.pageNumbers = []
            for (var i = startPage; i <= endPage; i++) {
                this.pageNumbers.push(i);
            }
        });
    }
}


