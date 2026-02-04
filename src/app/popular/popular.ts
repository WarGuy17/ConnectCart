import { Component } from '@angular/core';

@Component({
  selector: 'app-popular',
  imports: [],
  templateUrl: './popular.html',
  styleUrl: './popular.css',
})
export class Popular {
  popularProducts = 'Popular Products!';
  clickHere = 'Click here for details!'
}
