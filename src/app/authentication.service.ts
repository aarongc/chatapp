import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(user: User): boolean {
    const valid = user.name === 'admin' && user.password === 'admin';

    if (valid) {
      localStorage.setItem('currentUser', user.name);
    }

    return valid;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
