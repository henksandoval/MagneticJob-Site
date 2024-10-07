import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/home.routes';

export const routes: Routes = [...homeRoutes, { path: '', redirectTo: '/home', pathMatch: 'full' }];
