import { Routes } from '@angular/router';
import { homeRoutes } from './useCases/home/home.routes';

export const routes: Routes = [
  ...homeRoutes,
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
