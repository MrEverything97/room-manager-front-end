import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interface/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL_UPDATE_PASSWORD = 'http://localhost:8080/api/changePassword';
  private readonly API_URL_GET_USER_BY_NAME = 'http://localhost:8080/user' ;
  constructor(private httpClient: HttpClient) { }
  updatePassword(oldPassword: string, newPassword: string): Observable<User> {
    return this.httpClient.put<User>(`${this.API_URL_UPDATE_PASSWORD}?oldPassword=${oldPassword}&newPassword=${newPassword}`, null);
  }
  getUserByUserName(name: string): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL_GET_USER_BY_NAME}/${name}`);
  }
}

