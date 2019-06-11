import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Users } from '../users';
import { CurrentUser } from '../models/currentuser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin: boolean;
  loginStatusChange: Subject<CurrentUser> = new Subject<CurrentUser>();
  users: User[];

  constructor(
    private router: Router,
    private userService: UserService
    ) {
    this.users = Users.map((user: User) => new User(user.id, user.name, user.password));
  }

  findUser(user: User): boolean {
    const found = (this.users || []).findIndex((item: User) => {
      return item.name === user.name && item.password === user.password;
    }) >= 0;

    if (!found) { this.userService.create(user); }
    
    return true;
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
