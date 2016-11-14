import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService, Book } from '../common/books.service';


@Component({
    selector: 'userbooks',
    template: require('./userbooks.component.html')
})
export class UserBooksComponent {
    public books: Book[];

    constructor(private booksService: BooksService) {
        this.load();
    }

    public remove(bookId) {
        this.booksService.removeUserDemand(bookId).subscribe(res => {
            for (var i in this.books) {
                let i_number = +i;
                if (this.books[i_number].id == bookId) {
                    this.books.splice(i_number,1)
                    break;
                }
            }
        });
    }

    public load() {
        this.booksService.loadUserBooks().then(result => {
            this.books = result;
        });
    }
}
