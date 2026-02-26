import { Routes } from '@angular/router';
import { authGuard } from '@art-work/core';

export const salesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sales/sales.component').then((m) => m.SalesComponent),
    // canActivate: [authGuard],
  },
];
