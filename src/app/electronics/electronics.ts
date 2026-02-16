import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';

@Component({
  selector: 'app-electronics',
  imports: [LoginHeader],
  templateUrl: './electronics.html',
  styleUrl: './electronics.css',
})
export class Electronics {
  userService = inject(UsersService);

  get electronics(){
    return this.userService.electronicsProducts;
  }
}
