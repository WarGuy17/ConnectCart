import { Injectable, signal } from '@angular/core';

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

  womenProducts = signal<Product[]>([]);
  mensProducts = signal<Product[]>([]);
  electronicsProducts = signal<Product[]>([]);
  jewelryProducts = signal<Product[]>([]);

  loadCategory(category: string) {
    const encoded = encodeURIComponent(category);
    fetch(`https://fakestoreapi.com/products/category/${encoded}`)
      .then(response => response.json())
      .then((data: Product[]) => {
        if (category === "men's clothing") {
          this.mensProducts.set(data);
        } else if (category === "women's clothing") {
          this.womenProducts.set(data);
          console.log('Products loaded:', this.womenProducts());
        } else if (category === "electronics") {
          this.electronicsProducts.set(data);
        } else if (category === "jewelery") {
          this.jewelryProducts.set(data);
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


