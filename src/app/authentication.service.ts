import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin: boolean;
  loginStatusChange: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {}

  login(user: User): boolean {
    this.isLogin = user.name === 'admin' && user.password === 'admin';

    if (this.isLogin) {
      localStorage.setItem('currentUser', user.name);
      this.loginStatusChange.next(this.isLogin);
    }

    return this.isLogin;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'], { queryParams: { returnUrl: '/' } });
  }
}
