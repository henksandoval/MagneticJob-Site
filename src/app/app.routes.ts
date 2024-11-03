import { Routes } from '@angular/router';
import { homeRoutes } from './features/MyResume/home/home.routes';
import { PageNotFoundComponent } from './features/MyResume/page-not-found/page-not-found.component';

export const routes: Routes = [
  ...homeRoutes,
  {
    path: '',
    redirectTo: '/home/john',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
