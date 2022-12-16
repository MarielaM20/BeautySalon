import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //user: IUser | null = null;

  user: IUser | null = {
    firstName: "Mariela",
    lastName: "Mircheva",
    email: "m.mircheva02@gmail.com",
    phone: "0888123456",
  };

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, phone: string, password: string, rePassword: string) {
    return this.http.post<any>('/api/register', { firstName, lastName, email, phone, password, rePassword });
  }

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', {email, password });
  }
}
