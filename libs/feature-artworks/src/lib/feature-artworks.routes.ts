import { Routes } from '@angular/router';
import { authGuard } from '@art-work/core';

export const artworkRoutes: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('./artwork-detail/artwork-detail.component').then(
        (m) => m.ArtworkDetailComponent,
      ),
    // canActivate: [authGuard],
  },
];
