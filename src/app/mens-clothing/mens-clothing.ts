import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';
import { Product } from '../users-service';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-mens-clothing',
  imports: [LoginHeader, Navigation],
  templateUrl: './mens-clothing.html',
  styleUrl: './mens-clothing.css',
})
export class MensClothing implements OnInit {
  productService = inject(UsersService);

  ngOnInit() {
    this.productService.loadCategory("men's clothing");
  }

  get mensClothing(){
    return this.productService.mensProducts();
  }


}
