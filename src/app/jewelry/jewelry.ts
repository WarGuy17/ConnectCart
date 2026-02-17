import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';
import { Login } from "../login/login";

@Component({
  selector: 'app-jewelry',
  imports: [LoginHeader],
  templateUrl: './jewelry.html',
  styleUrl: './jewelry.css',
})
export class Jewelry {
  userService = inject(UsersService);

  ngOnInit() {
    this.userService.loadCategory("jewelery");
  }

  get jewelry(){
    return this.userService.jewelryProducts();
  }
}
