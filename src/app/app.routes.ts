import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { MensClothing } from './mens-clothing/mens-clothing';
import { WomensClothing } from './womens-clothing/womens-clothing';
import { Electronics } from './electronics/electronics';
import { Jewelry } from './jewelry/jewelry';
import { Searchresults } from './searchresults/searchresults';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: Cart,
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'mens-clothing',
        component: MensClothing
    },
    {
        path: 'womens-clothing',
        component: WomensClothing
    },
    {
        path: 'electronics',
        component: Electronics
    },
    {
        path: 'jewelry',
        component: Jewelry
    },
    {
        path: 'searchresults',
        component: Searchresults
    },

];
