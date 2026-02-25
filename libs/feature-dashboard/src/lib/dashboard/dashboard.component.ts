import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthStore, ArtworkStore, Artwork } from '@art-work/core';
import { AppSidebarComponent, ArtworkCardComponent } from '@art-work/ui';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppSidebarComponent,
    ArtworkCardComponent,
  ],
  template: `
    <div class="page">
      <lib-app-sidebar />

      <main class="main">
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <h1 class="page-title">All Artworks</h1>
            <p class="page-sub">{{ artworkStore.artworks().length }} pieces in your collection</p>
          </div>
          <div class="header-right">
            <div class="search-box">
              <mat-icon class="search-icon">search</mat-icon>
              <input
                class="search-input"
                type="text"
                placeholder="Search artworks..."
                [value]="searchQuery()"
                (input)="searchQuery.set($any($event.target).value)"
              />
            </div>
            <button mat-flat-button class="add-btn" (click)="onAddArtwork()">
              <mat-icon>add</mat-icon>
              Add Artwork
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="stats-row">
          <div class="stat-card">
            <span class="stat-value">{{ artworkStore.totalCount() }}</span>
            <span class="stat-label">Total Artworks</span>
          </div>
          <div class="stat-card">
            <span class="stat-value stat-value--teal">{{ artworkStore.availableCount() }}</span>
            <span class="stat-label">Available</span>
          </div>
          <div class="stat-card">
            <span class="stat-value stat-value--orange">{{ artworkStore.soldCount() }}</span>
            <span class="stat-label">Sold</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">{{ artworkStore.revenue() | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
            <span class="stat-label">Total Revenue</span>
          </div>
        </div>

        <!-- Grid label -->
        <span class="grid-label">RECENT ARTWORKS</span>

        <!-- Artwork Grid -->
        @if (artworkStore.isLoading()) {
          <div class="loading-state">
            <mat-spinner diameter="40" />
          </div>
        } @else if (filteredArtworks().length === 0) {
          <div class="empty-state">
            <mat-icon>palette</mat-icon>
            <p>{{ searchQuery() ? 'No artworks match your search.' : 'No artworks yet. Add your first piece!' }}</p>
          </div>
        } @else {
          <div class="artwork-grid">
            @for (artwork of filteredArtworks(); track artwork.id) {
              <lib-artwork-card
                [artwork]="artwork"
                (cardClick)="onArtworkSelected($event)"
              />
            }
          </div>
        }
      </main>
    </div>
  `,
  styles: `
    .page {
      display: flex;
      height: 100vh;
      overflow: hidden;
      background: var(--bg-page);
    }

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 32px 40px;
      gap: 32px;
      overflow-y: auto;
    }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .page-title {
      margin: 0;
      font-family: 'Newsreader', serif;
      font-size: 32px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .page-sub {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: var(--text-secondary);
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      padding: 10px 14px;
    }
    .search-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: var(--text-muted);
    }
    .search-input {
      border: none;
      outline: none;
      background: transparent;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-primary);
      width: 200px;
    }
    .search-input::placeholder {
      color: var(--text-muted);
    }

    .add-btn {
      background: var(--accent-teal) !important;
      color: #ffffff !important;
      border-radius: 8px !important;
    }

    /* Stats */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .stat-card {
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      padding: 20px;
    }
    .stat-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 28px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .stat-value--teal   { color: var(--accent-teal); }
    .stat-value--orange { color: var(--accent-orange); }
    .stat-label {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: var(--text-tertiary);
    }

    /* Grid label */
    .grid-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
      color: var(--text-tertiary);
    }

    /* Artwork Grid */
    .artwork-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 20px;
    }

    .loading-state,
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 64px 0;
      gap: 16px;
      color: var(--text-muted);
    }
    .empty-state mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
    }
    .empty-state p {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
    }
  `,
})
export class DashboardComponent {
  protected readonly authStore = inject(AuthStore);
  protected readonly artworkStore = inject(ArtworkStore);
  private readonly router = inject(Router);

  readonly searchQuery = signal('');

  readonly filteredArtworks = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.artworkStore.artworks();
    return this.artworkStore.artworks().filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.medium.toLowerCase().includes(q) ||
        a.collection.toLowerCase().includes(q),
    );
  });

  constructor() {
    // Re-load artworks whenever the authenticated user changes
    effect(() => {
      const uid = this.authStore.uid();
      if (uid) {
        this.artworkStore.loadAll(uid);
      }
    });
  }

  onArtworkSelected(artwork: Artwork): void {
    this.router.navigate(['/artworks', artwork.id]);
  }

  onAddArtwork(): void {
    this.router.navigate(['/artworks', 'new']);
  }
}
