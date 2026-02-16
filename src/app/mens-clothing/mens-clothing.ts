import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';
import { Product } from '../users-service';

@Component({
  selector: 'app-mens-clothing',
  imports: [LoginHeader],
  templateUrl: './mens-clothing.html',
  styleUrl: './mens-clothing.css',
})
export class MensClothing {
  productService = inject(UsersService);

  get mensClothing(){
    return this.productService.menProducts;
  }


}
