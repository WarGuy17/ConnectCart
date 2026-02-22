import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService { 
  private products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.products$ = this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      shareReplay(1)
    );
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
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
