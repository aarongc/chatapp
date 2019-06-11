import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Users } from './users';
import { CurrentUser } from './models/currentuser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin: boolean;
  loginStatusChange: Subject<CurrentUser> = new Subject<CurrentUser>();
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
    this.isLogin = this.findUser(user);

    if (this.isLogin) {
      localStorage.setItem('currentUser', user.name);
      this.loginStatusChange.next(new CurrentUser(user.name, this.isLogin));
    }

    return this.isLogin;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'], { queryParams: { returnUrl: '/' } });
  }
}
