import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams, Response  } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { Observable }     from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/operator/map';
import 'rxjs/Rx';

@Injectable()
export class BooksService {
    private ids: number[];
    public userBooksLoaded: Promise<any>;
    constructor(private authHttp: AuthHttp, private http: Http, private auth: AuthService) {
        this.userBooksLoaded = this.loadUserBooks();
    }


    public loadUserBooks(): Promise<Book[]>{
        let o = this.authHttp.get('/api/users/books').map(this.extractData);
        return new Promise((resolve, reject) => {
                    o.subscribe(books => {
                                this.ids = [];
                                for (var b of books) // for acts as a foreach
                                { 
                                    this.ids.push(b.id);
                                }
                                resolve(books);
                              });
        });
    }
    public search(filter: Filter): Promise<PagedBooks>{
        
        let params = {
            search: filter.toParams()
        };
        return new Promise((resolve, reject) => {
            this.http.get('/api/books/search', params)
                .map(this.extractData)
                .subscribe(data => {
                    this.userBooksLoaded.then(x => {
                        resolve(data);
                    });
                    
                })
        });
    }

    private extractData(res: Response) {
        return res.json();
    }

    public isRequested(bookId){
        let demands = this.userDemandsIds();
        return demands.indexOf(bookId) > -1;
    }

    public addUserDemand(id : number){
        if (this.isRequested(id)){
            return;
        }
        
        let body = JSON.stringify({ id });
        return this.authHttp.post('/api/users/books', body, { headers: contentHeaders })
            .subscribe(ok => {
                let d = this.userDemandsIds();
                d.push(id);
            });
    }

    public removeUserDemand(bookId){
        if (!this.isRequested(bookId)){
            return;
        }
        const url = `/api/users/books/${bookId}`;
        let o = this.authHttp.delete(url, { headers: contentHeaders });
        o.subscribe(ok => {
                                let arr = this.userDemandsIds()
                                var index = arr.indexOf(bookId);
                                if (index >= 0) {
                                  arr.splice( index, 1 );
                                }
        });
        return o;
    }
    public userDemandsIds(): number[] {
        return this.ids;
    }
}


export class Filter {
    constructor(
        public title: string,
        public description: string,
        public author: string,
        public publisher: string,
        public page: number,
        public pageSize: number
    ) { }

    public toParams() {
        let params = new URLSearchParams();
        params.set("title", this.title);
        params.set("description", this.description);
        params.set("author", this.author);
        params.set("publisher", this.publisher);
        params.set("page", this.page.toString());
        params.set("pageSize", this.pageSize.toString());
        return params;
    }
}

export interface Book {
    id: string;
    title: string;
    publisher: string;
    authors: string[];
    description: string;
}

export interface PagedBooks {
    currentPage: number;
    totalPages: number;
    items: Book[];
}