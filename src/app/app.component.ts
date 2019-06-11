import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Chat app';
  isLogin = false;
  subscription: any;

  constructor (private authenticationService: AuthenticationService) {
    this.isLogin = authenticationService.isLogin;
    this.subscription = authenticationService.loginStatusChange.subscribe((value) => {
      this.isLogin = value;
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