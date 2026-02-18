import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-electronics',
  imports: [LoginHeader, Navigation],
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
