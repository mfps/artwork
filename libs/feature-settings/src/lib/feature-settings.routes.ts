import { Routes } from '@angular/router';
import { authGuard } from '@art-work/core';

export const settingsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./settings/settings.component').then(
        (m) => m.SettingsComponent,
      ),
    // canActivate: [authGuard],
  },
];
