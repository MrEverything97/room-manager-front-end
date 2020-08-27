import { Component, OnInit } from '@angular/core';
import {Register} from 'src/app/interface/Register';
import {AuthService} from 'src/app/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  registerInfo: Register;
  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void{
  }

  onSubmit(): void{
    this.registerInfo = new Register(
        this.form.username,
        this.form.email,
        this.form.password,
        this.form.firstName,
        this.form.lastName,
        this.form.phoneNumber
    );

    this.authService.signUp(this.registerInfo).subscribe(
        data => {
          this.isRegister = true;
          this.isRegisterFailed = false;
          // this.router.navigate(['/login']);
        }, error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isRegisterFailed = true;
          this.isRegister = false;
        }
    );
  }
}
