import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';


const styles   = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, private auth: AuthService) {
  }

  login(event, username, password) {
    event.preventDefault();
    this.auth.logIn(username, password);
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
