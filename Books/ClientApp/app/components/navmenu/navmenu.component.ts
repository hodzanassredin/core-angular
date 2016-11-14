import { Component } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthService } from '../common/auth.service';


@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent {
    constructor(private auth: AuthService) { }

}
