import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser, MOCKED_USER_DATA } from '../constants/data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = MOCKED_USER_DATA;
  private usersSubject = new BehaviorSubject<IUser[]>(MOCKED_USER_DATA);

  constructor() {}

  getUsers() {
    return this.usersSubject.asObservable();
  }

  addUser(user: IUser) {
    this.users.push(user);
    this.usersSubject.next([...this.users]);
  }

  getUser(id: number): IUser | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateUser(user: IUser) {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index >= 0) {
      this.users[index] = user;
      this.usersSubject.next([...this.users]);
    }
  }

  deleteUser(userId: number) {
    this.users = this.users.filter((u) => u.id !== userId);
    this.usersSubject.next([...this.users]);
  }
}
