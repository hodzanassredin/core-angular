import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';

const styles   = require('./signup.css');
const template = require('./signup.html');

@Component({
  selector: 'signup',
  template: template,
  styles: [ styles ]
})
export class Signup {
  constructor(public router: Router, private auth: AuthService) {
  }

  signup(event, username, password) {
    event.preventDefault();
    this.auth.signUp(username, password);
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}
