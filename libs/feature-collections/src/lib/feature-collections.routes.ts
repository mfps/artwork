import { Routes } from '@angular/router';
import { authGuard } from '@art-work/core';

export const collectionsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./collections/collections.component').then(
        (m) => m.CollectionsComponent,
      ),
    // canActivate: [authGuard],
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./collection-detail/collection-detail.component').then(
        (m) => m.CollectionDetailComponent,
      ),
    // canActivate: [authGuard],
  },
];
