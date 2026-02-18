import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-searchresults',
  imports: [],
  templateUrl: './searchresults.html',
  styleUrl: './searchresults.css',
})
export class Searchresults implements OnInit{
  term = '';
  filteredProducts: any[] = [];

  userService = inject(UsersService);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.term = params['q'] ?? '';
      this.applyFilter(this.term);
    })
  }

  applyFilter(term: string) {
    const lower = term.toLowerCase();
    this.filteredProducts = this.userService.products.filter((product: any) => {
      return (product.title as string).toLowerCase().includes(lower);
    });
  }
}

