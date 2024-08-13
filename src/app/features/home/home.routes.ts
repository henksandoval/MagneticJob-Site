import { HomeComponent } from './home.component';

const homeRoutes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        loadComponent: () =>
          import('./profile/about/about.component').then(
            (c) => c.AboutComponent,
          ),
      },
    ],
  },
];

export { homeRoutes };
