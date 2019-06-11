import { Injectable } from '@angular/core';
import { Users } from '../users';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registeredUsers: User[];

  constructor() {
    this.getAll();
  }

  getAll() {
    this.registeredUsers = Users.map((user: User) => new User(user.id, user.name, user.password)) || [];

    return this.registeredUsers;
  }

  getById(id: number) {
      return this.registeredUsers.find((user: User) => {
        return user.id === id;
      });
  }

  create(user: User) {
      const newUser = new User(this.registeredUsers.length + 1, user.name, user.password);
      return this.registeredUsers.push(newUser);
  }

  update(user: User) {
      return user;
  }

  delete(id: number) {
      return id;
  }
}
