import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nav } from './nav/nav';

export const routes: Routes = [
    {path: '' , component: Home},
    {path: '/nav', component: Nav},
];
