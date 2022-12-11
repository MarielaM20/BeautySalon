import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null= {
    firstName: 'Mariela',
    lastName: 'Mircheva',
    email: 'm.mircheva02@gmail.com',
    phone: '0886123456'
  }as any;

  get isLoggedIn(){
    return this.user !== null;
  }

  constructor() { }
}
