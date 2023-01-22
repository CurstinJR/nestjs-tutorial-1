import { Injectable } from '@nestjs/common';
import { User } from '../../models/users/user-model';

@Injectable()
export class UsersService {
  private mockUsers: User[] = [
    {
      id: 1,
      username: 'cjrose',
      email: 'cjrose@email.com',
    },
    {
      id: 2,
      username: 'ajrose',
      email: 'ajrose@email.com',
    },
  ];

  public getUser() {
    return this.mockUsers;
  }

  public getUserById(id: number) {
    return this.mockUsers.find((user) => user.id === id);
  }

  public addNewUser(user: User) {
    this.mockUsers.push(user);
    return user;
  }
}
