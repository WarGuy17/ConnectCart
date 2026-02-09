import { Component, inject } from '@angular/core';
import { HomeHeader } from '../home-header/home-header';
import { Navigation } from '../navigation/navigation';
import { Seasonal } from '../seasonal/seasonal';
import { Popular } from '../popular/popular';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-home',
  imports: [HomeHeader,Navigation,Seasonal,Popular],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  usersService = inject(UsersService);

  
}
