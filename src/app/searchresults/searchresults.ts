import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users-service';
import { Product } from '../users-service';

@Component({
  selector: 'app-searchresults',
  imports: [],
  templateUrl: './searchresults.html',
  styleUrl: './searchresults.css',
})
export class Searchresults implements OnInit{
  term = '';
  category = '';
  filteredProducts: any[] = [];

  userService = inject(UsersService);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.term = params['q'] ?? '';
      this.category = params['category'] ?? '';
      this.applyFilter(this.term, this.category);
    })
  }

  applyFilter(term: string, category: string) {

    let results: any[] = this.userService.products;//this simplifies the variable

    if(this.term){//this looks at the term and see if it exists.
      const lower = this.term.toLowerCase();//this takes that term and lowercases it.
      results = results.filter((product: any)=>{//this takes the results at the top and filters it using product: any as the argument
        product.title.toLowerCase().includes(lower)//this returns a product that includes that term pushed from the top
      });
    }

    switch(this.category){
      case 'mens':
        results = results.filter((product: any) => product.category === "men's clothing");
        break;
      case 'womens':
        results = results.filter((product: any) => product.category === "women's clothing");
        break;
      case 'electronics':
        results = results.filter((product: any) => product.category === "electronics");
        break;
      case 'jewelry':
        results = results.filter((product: any) => product.category === "jewelry"); 
        break;
    }
    console.log(results);
    this.filteredProducts = results;//results from either one put into the filtered products array
  }
}

