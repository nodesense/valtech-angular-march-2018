import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService,
             private router: Router) { 

  }

  ngOnInit() {

  }

  login() {
    this.authService
        .login(this.username, this.password)
        .subscribe ( () => {
           this.router.navigateByUrl("/");
          },

          // error handler
          (error: any) => {
            this.errorMessage = 'invalid username/password';
          }
        ) ;
  }

}
