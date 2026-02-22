import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  navigation = [ //different categories of products for the user//
    'Mens Clothing',
    'Womens Clothing',
    'Electronics',
    'Jewelry',
  ];

  constructor(private router: Router) {}

  getCategory(category: string) {
    this.router.navigate(['/searchresults'], {
      queryParams: {category},
      queryParamsHandling: 'merge'
    })
  }
}
