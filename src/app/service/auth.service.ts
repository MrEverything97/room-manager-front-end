import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../interface/jwt-respone';
import {LoginInfo} from '../interface/login-infor';
import {Register} from '../interface/Register';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/login';
  private registerUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: Register): Observable<string> {
    return this.http.post<string>(this.registerUrl, info, httpOptions);
  }
}
