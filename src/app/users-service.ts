import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  products = [];

  loadProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        console.log('Products loaded:', this.products)
      })
  }

  loadedProducts :Product[]  = []

  loadCategory(category: string) {
    const encoded = encodeURIComponent(category)
    fetch(`https://fakestoreapi.com/products/category/${encoded}`)
      .then(response => response.json())
      .then(data =>{
        this.loadedProducts = data;
        console.log('Products loaded:', this.loadedProducts)
      })
  }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


