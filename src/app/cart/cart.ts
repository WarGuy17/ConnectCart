import { Component } from '@angular/core';
import { LoginHeader } from '../login-header/login-header';

@Component({
  selector: 'app-cart',
  imports: [LoginHeader],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
 productTitle = 'Placeholder';
 productPrice = 'Price: 20$'
 cartTotal = 'Cart Total';
 cartProductName = 'Product Name';
 cartProductPrice = 'Product Price';
}
