import { Injectable, EventEmitter } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router, CanActivate } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Injectable()
export class AuthService {
    public userLoggedIn$: EventEmitter<string>;
    public userLoggedOut$: EventEmitter<string>;
    constructor(private router: Router, private http: Http) {
        this.userLoggedIn$ = new EventEmitter<string>();
        this.userLoggedOut$ = new EventEmitter<string>();
    }
    loggedIn() {
        try {
            return tokenNotExpired();
        }
        catch (e) {
            return false;
        }
    }

    logOut() {
        localStorage.clear();
        this.userLoggedOut$.emit("");
        this.router.navigate(['/home']);
    }

    userName() {
        return this.loggedIn() ? localStorage["username"] : "Unauthorized";
    }

    signUp(username, password){
        this.send(username,password, '/api/users/register');
    }
    logIn(username, password){
        this.send(username,password, '/api/users/login');
    }

    private send(username, password, url){
        let body = JSON.stringify({ username, password });
        this.http.post(url, body, { headers: contentHeaders })
          .subscribe(
            response => {
              localStorage.setItem('id_token', response.json().id_token);
              localStorage.setItem('username', username);
              this.router.navigate(['home']);
              this.userLoggedIn$.emit(username);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
          );
    }
}