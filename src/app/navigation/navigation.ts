import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
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
