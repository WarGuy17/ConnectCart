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

    if(this.category) {//this looks at the category and see if it exists.
      const lowerCat = this.category.toLowerCase();//this lower cases the category
      results = results.filter((product: any)=> {//this takes the results and filters it with product: any
        product.category.toLowerCase() === lowerCat//this checks the product category and compares each one to the one pushed at the top.
      })
    }

    if(this.category === 'mens') {
      results = results.filter((product: any) => product.category === "men's clothing")
    }
    console.log(results)
    this.filteredProducts = results;//results from either one put into the filtered products array
  }
}

