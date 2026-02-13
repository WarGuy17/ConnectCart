import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  ]
}
