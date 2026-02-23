import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginHeader } from '../login-header/login-header';
import { ProductService } from '../product-service';
import { AsyncPipe } from '@angular/common';
import { Product } from '../product-service';
import { switchMap, map } from 'rxjs';

@Component({
  selector: 'app-searchresults',
  imports: [LoginHeader, AsyncPipe],
  templateUrl: './searchresults.html',
  styleUrl: './searchresults.css',
})
export class Searchresults {
  private route = inject(ActivatedRoute)
  private productService = inject(ProductService);
  products$ = this.route.queryParams.pipe(
    switchMap(params =>
      this.productService.getProducts().pipe(
        map(products => this.applyFilters(products, params))
      )
    )
  )

  private applyFilters(products: Product[], params: any): Product[] {
    const term = params['search']?.toLowerCase() ?? '';
    let category = params['category']?.toLowerCase() ?? '';

    const categoryMap: Record<string, string> = {
      mens: "men's clothing",
      womens: "women's clothing",
      jewelry: "jewelery"
    }

    if(categoryMap[category]) {
      category = categoryMap[category];
    }

    return products.filter(p => {
      const matchesTerm = term ? p.title.toLowerCase().includes(term): true;
      const matchesCategory = category ? p.category.toLowerCase() === category : true;
      return matchesTerm && matchesCategory;
    })
  }
}

