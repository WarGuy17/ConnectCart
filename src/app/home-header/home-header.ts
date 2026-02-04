import { Component } from '@angular/core';
import { MiniNav } from '../MiniNav/mininav';
import { Search } from '../search/search';

@Component({
  selector: 'app-home-header',
  imports: [MiniNav, Search],
  templateUrl: './home-header.html',
  styleUrl: './home-header.css',
})
export class HomeHeader {
}
