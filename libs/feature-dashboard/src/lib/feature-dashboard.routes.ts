import { Routes } from '@angular/router';
import { authGuard } from '@art-work/core';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
    // canActivate: [authGuard],
  },
];
