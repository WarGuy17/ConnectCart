import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-jewelry',
  imports: [LoginHeader, Navigation],
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
