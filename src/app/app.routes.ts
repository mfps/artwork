import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('@art-work/feature-auth').then((m) => m.authRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@art-work/feature-dashboard').then((m) => m.dashboardRoutes),
  },
  {
    path: 'artworks',
    loadChildren: () =>
      import('@art-work/feature-artworks').then((m) => m.artworkRoutes),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('@art-work/feature-collections').then((m) => m.collectionsRoutes),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@art-work/feature-settings').then((m) => m.settingsRoutes),
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('@art-work/feature-sales').then((m) => m.salesRoutes),
  },
  { path: '**', redirectTo: '/auth/login' },
];
