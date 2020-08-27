import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from 'src/app/service/TokenStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  roles: string[];
  public authority: string;
  title = 'my-app';
  constructor(private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        else if (role === 'ROLE_CUSTOMER') {
          this.authority = 'ct';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
