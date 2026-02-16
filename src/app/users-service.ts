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

  constructor() {
    this.loadCategory("men's clothing");
    this.loadCategory("women's clothing");
    this.loadCategory("electronics");
  }

  menProducts :Product[]  = []
  womenProducts :Product[]  = []
  electronicsProducts :Product[]  = []

  loadCategory(category: string) {
    const encoded = encodeURIComponent(category);
    fetch(`https://fakestoreapi.com/products/category/${encoded}`)
      .then(response => response.json())
      .then((data: Product[]) => {
        if (category === "men's clothing") {
          this.menProducts = data;
        } else if (category === "women's clothing") {
          this.womenProducts = data;
          console.log('Products loaded:', this.womenProducts);
        } else if (category === "electronics") {
          this.electronicsProducts = data;
        }
      })
      .catch(err => console.error(`Error loading category ${category}:`, err));
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


