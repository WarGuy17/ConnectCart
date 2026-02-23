import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-practice',
  imports: [],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  
}
