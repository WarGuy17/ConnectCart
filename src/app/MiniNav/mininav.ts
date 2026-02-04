import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mininav',
  imports: [RouterLink],
  templateUrl: './mininav.html',
  styleUrl: './mininav.css',
})
export class MiniNav {
  account = 'Account';
  cart = 'Cart';
  ai = 'AI Help';
}
