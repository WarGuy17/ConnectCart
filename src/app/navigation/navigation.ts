import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  navigation = [ //different categories of products for the user//
    'Shoes',
    'Clothes',
    'Hats',
    'Jewelry',
    'Make-up',
    'Accessories'
  ]
}
