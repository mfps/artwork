import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppSidebarComponent } from '@art-work/ui';
import { Collection, MOCK_COLLECTIONS } from '../collection.model';

@Component({
  selector: 'lib-collections',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    AppSidebarComponent,
  ],
  template: `
    <div class="page">
      <lib-app-sidebar />

      <main class="main">
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <h1 class="page-title">Collections</h1>
            <p class="page-sub">{{ filteredCollections().length }} collections</p>
          </div>
          <div class="header-right">
            <div class="search-box">
              <mat-icon class="search-icon">search</mat-icon>
              <input
                class="search-input"
                type="text"
                placeholder="Search collections..."
                [value]="searchQuery()"
                (input)="searchQuery.set($any($event.target).value)"
              />
            </div>
            <button mat-flat-button class="new-btn" (click)="onNewCollection()">
              <mat-icon>add</mat-icon>
              New Collection
            </button>
          </div>
        </div>

        <!-- Grid -->
        <div class="collections-grid">
          @for (col of filteredCollections(); track col.id) {
            <div class="coll-card" (click)="onCardClick(col)" style="cursor:pointer">
              <div class="coll-cover">
                @if (col.coverUrl) {
                  <img [src]="col.coverUrl" [alt]="col.title" />
                } @else {
                  <div class="coll-cover-placeholder">
                    <mat-icon>collections</mat-icon>
                  </div>
                }
              </div>
              <div class="coll-body">
                <div class="coll-header-row">
                  <span class="coll-title">{{ col.title }}</span>
                  <span class="coll-status-badge">{{ col.status }}</span>
                </div>
                <span class="coll-count">{{ col.artworkCount }} artworks</span>
                <p class="coll-desc">{{ col.description }}</p>
                <span class="coll-value">{{ col.totalValue | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
              </div>
            </div>
          }

          <!-- Create new card -->
          <button class="create-card" (click)="onNewCollection()">
            <mat-icon class="create-icon">add_circle_outline</mat-icon>
            <span class="create-label">Create New Collection</span>
          </button>
        </div>
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
      font-size: 28px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .page-sub {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
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
      padding: 8px 14px;
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
      width: 180px;
    }
    .search-input::placeholder {
      color: var(--text-muted);
    }
    .new-btn {
      background: var(--accent-teal) !important;
      color: #ffffff !important;
      border-radius: 8px !important;
    }

    /* Grid */
    .collections-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    /* Collection card */
    .coll-card {
      display: flex;
      flex-direction: column;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      overflow: hidden;
    }
    .coll-cover {
      height: 160px;
      overflow: hidden;
      background: var(--bg-page);
    }
    .coll-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .coll-cover-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-muted);
    }
    .coll-cover-placeholder mat-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
    }
    .coll-body {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 16px;
    }
    .coll-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .coll-title {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .coll-status-badge {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      background: color-mix(in srgb, var(--accent-teal) 15%, transparent);
      color: var(--accent-teal);
    }
    .coll-count {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: var(--text-tertiary);
    }
    .coll-desc {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.4;
    }
    .coll-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
    }

    /* Create new card */
    .create-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      min-height: 240px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .create-card:hover {
      background: var(--sidebar-hover);
    }
    .create-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--text-muted);
    }
    .create-label {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-tertiary);
    }
  `,
})
export class CollectionsComponent {
  private readonly router = inject(Router);

  readonly searchQuery = signal('');

  readonly collections = signal<Collection[]>(MOCK_COLLECTIONS);

  readonly filteredCollections = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.collections();
    return this.collections().filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  });

  onCardClick(col: Collection): void {
    this.router.navigate(['/collections', col.id]);
  }

  onNewCollection(): void {
    // TODO: open create collection dialog
  }
}
