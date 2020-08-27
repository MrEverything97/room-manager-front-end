import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interface/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL_REGISTER = 'http://localhost:8080/api/register';
  private readonly API_URL_UPDATE_PASSWORD = 'http://localhost:8080/api/changePassword';
  constructor(private httpClient: HttpClient) { }
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL_REGISTER, user);
  }

  updatePassword(oldPassword: string, newPassword: string): Observable<User> {
    return this.httpClient.put<User>(`${this.API_URL_UPDATE_PASSWORD}?oldPassword=${oldPassword}&newPassword=${newPassword}`, null);
  }
}

