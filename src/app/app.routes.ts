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
  { path: '**', redirectTo: '/auth/login' },
];
