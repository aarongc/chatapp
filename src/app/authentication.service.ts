import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin: boolean;
  loginStatusChange: Subject<boolean> = new Subject<boolean>();
  users: User[];

  constructor(private router: Router) {
    this.users = Users.map((user: User) => new User(user.id, user.name, user.password));
  }

  findUser(search: User): boolean {
    return (this.users || []).findIndex((user: User) => {
      return user.name === search.name && user.password === search.password;
    }) >= 0;
  }

  login(user: User): boolean {
    this.isLogin = this.findUser(user);//user.name === 'admin' && user.password === 'admin';

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
