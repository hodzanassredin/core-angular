import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { UserBooksComponent } from './components/userbooks/userbooks.component';
import { Login } from './components/login';
import { Signup } from './components/signup';
import { AuthGuard } from './components/common/auth.guard';
import { AuthService } from './components/common/auth.service';
import { BooksService, PagedBooks, Filter } from './components/common/books.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        UserBooksComponent,
        BooksComponent,
        HomeComponent,
        Login,
        Signup
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: Login },
            { path: 'signup', component: Signup },
            { path: 'books-my', component: UserBooksComponent },
            { path: 'books-data', component: BooksComponent, canActivate: [AuthGuard] },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        AuthGuard, AuthService, BooksService, ...AUTH_PROVIDERS
    ]
})
export class AppModule {
}
