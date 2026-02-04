import { Component } from '@angular/core';
import { LoginHeader } from '../login-header/login-header';

@Component({
  selector: 'app-login',
  imports: [LoginHeader],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userAccountLogin = 'User Account Login';

}
