import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/home.routes';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  ...homeRoutes,
  {
    path: '',
    redirectTo: '/home/jane',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
