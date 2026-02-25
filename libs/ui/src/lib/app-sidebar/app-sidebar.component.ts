import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'lib-app-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <nav class="sidebar">
      <a class="sidebar-logo" routerLink="/dashboard">
        <mat-icon class="logo-icon">palette</mat-icon>
        <span class="logo-text">ArtWork</span>
      </a>

      <div class="nav-section">
        <span class="nav-label">MANAGE</span>
        @for (item of manageItems; track item.route) {
          <a
            class="nav-item"
            [routerLink]="item.route"
            routerLinkActive="nav-item--active"
          >
            <mat-icon>{{ item.icon }}</mat-icon>
            <span>{{ item.label }}</span>
          </a>
        }
      </div>

      <div class="nav-section nav-section--bottom">
        <span class="nav-label">ACCOUNT</span>
        @for (item of accountItems; track item.route) {
          <a
            class="nav-item"
            [routerLink]="item.route"
            routerLinkActive="nav-item--active"
          >
            <mat-icon>{{ item.icon }}</mat-icon>
            <span>{{ item.label }}</span>
          </a>
        }
      </div>
    </nav>
  `,
  styles: `
    :host {
      display: block;
      width: 260px;
      flex-shrink: 0;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--sidebar-bg);
      padding: 32px 20px;
      gap: 0;
    }

    .sidebar-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      padding-bottom: 32px;
    }
    .logo-icon {
      color: var(--accent-teal);
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .logo-text {
      font-family: 'Newsreader', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--sidebar-text);
    }

    .nav-section {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .nav-section--bottom {
      margin-top: 32px;
    }

    .nav-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
      color: var(--sidebar-text-muted);
      padding: 0 16px 8px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      border-radius: 8px;
      text-decoration: none;
      color: var(--sidebar-text-muted);
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.1s ease, color 0.1s ease;
    }
    .nav-item mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
    .nav-item:hover {
      background: var(--sidebar-hover);
      color: var(--sidebar-text);
    }
    .nav-item:hover mat-icon {
      color: var(--sidebar-text);
    }
    .nav-item--active {
      background: var(--sidebar-hover);
      color: var(--sidebar-text) !important;
    }
    .nav-item--active mat-icon {
      color: #ffffff;
    }
  `,
})
export class AppSidebarComponent {
  readonly manageItems: NavItem[] = [
    { label: 'All Artworks', icon: 'grid_view', route: '/dashboard' },
    { label: 'Recent', icon: 'schedule', route: '/recent' },
    { label: 'Collections', icon: 'sell', route: '/collections' },
    { label: 'Sales', icon: 'shopping_bag', route: '/sales' },
    { label: 'Clients', icon: 'people', route: '/clients' },
  ];

  readonly accountItems: NavItem[] = [
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}
