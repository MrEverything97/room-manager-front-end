import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from 'src/app/service/TokenStorage';
import {UserService} from 'src/app/service/user.service';
import {User} from 'src/app/interface/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: string;
  isLogin = false;
  isLoginFalse = false;
  public info: any;
  user: User;
  constructor(
              private tokenService: TokenStorageService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfor();
    console.log(this.info.username);
    if (this.info.username !== ''){
      this.getUserDetail();
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.isLoginFalse = false;
    }else {
      this.isLogin = false;
      this.isLoginFalse = true;
    }
    this.getUserInfor();
  }
   logout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  getUserInfor(){
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      // authorities: this.token.getAuthorities()
    };
    // console.log(this.info);
    // this.accessToken = this.token.getToken();
  }
  async getUserDetail(){
    await this.userService.getUserByUserName(this.info.username).subscribe( data =>
    {
      this.user = data;
    }, error =>
        console.log(error));
  }
}
