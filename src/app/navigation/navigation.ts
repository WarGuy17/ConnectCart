import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  navigation = [
    'Shoes',
    'Clothes',
    'Hats',
    'Jewelry',
    'Make-up',
    'Accessories'
  ]
}
