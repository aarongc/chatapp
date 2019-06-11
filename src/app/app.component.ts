import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CurrentUser } from './models/currentuser';
import { isString } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Chat app';
  isLogin = isString(localStorage.getItem('currentUser'));
  subscription: any;

  constructor (private authenticationService: AuthenticationService) {
    this.subscription = authenticationService.loginStatusChange.subscribe((user: CurrentUser) => {
       this.isLogin = user.isLogin;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
  
  onLogout() {
    this.isLogin = false;
    this.authenticationService.logout();
  }
}