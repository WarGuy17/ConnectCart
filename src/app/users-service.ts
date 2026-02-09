import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  products = [];

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        console.log('Products loaded:', this.products)
      })
  }
}
