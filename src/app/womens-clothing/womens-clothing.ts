import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-womens-clothing',
  imports: [LoginHeader, Navigation],
  templateUrl: './womens-clothing.html',
  styleUrl: './womens-clothing.css',
})
export class WomensClothing implements OnInit {
  productService = inject(UsersService);

  ngOnInit() {
    this.productService.loadCategory("women's clothing");
  }

  get womensClothing(){
    return this.productService.womenProducts();
  }
}
