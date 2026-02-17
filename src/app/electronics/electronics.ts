import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';

@Component({
  selector: 'app-electronics',
  imports: [LoginHeader],
  templateUrl: './electronics.html',
  styleUrl: './electronics.css',
})
export class Electronics implements OnInit {
  userService = inject(UsersService);

  ngOnInit() {
    this.userService.loadCategory("electronics");
  }

  get electronics(){
    return this.userService.electronicsProducts();
  }
}
