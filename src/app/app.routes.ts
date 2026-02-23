import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { Searchresults } from './searchresults/searchresults';
import { Practice } from './practice/practice';
import { Practicetwo } from './practicetwo/practicetwo';

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
        path: 'searchresults',
        component: Searchresults
    },
    {
        path: 'practice',
        component: Practice
    },
    {
        path: 'practice2',
        component: Practicetwo
    }

];
