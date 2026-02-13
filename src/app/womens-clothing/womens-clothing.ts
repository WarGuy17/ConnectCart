import { Component, inject } from '@angular/core';
import { UsersService } from '../users-service';
import { LoginHeader } from '../login-header/login-header';

@Component({
  selector: 'app-womens-clothing',
  imports: [LoginHeader],
  templateUrl: './womens-clothing.html',
  styleUrl: './womens-clothing.css',
})
export class WomensClothing {
  productService = inject(UsersService);

  ngOnInit(){
    this.productService.loadCategory("womens's clothing")
  }

  get womensClothing(){
    return this.productService.loadedProducts;
  }
}
