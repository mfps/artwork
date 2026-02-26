import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppSidebarComponent, StatusBadgeComponent } from '@art-work/ui';
import {
  Collection,
  CollectionArtwork,
  MOCK_ALL_ARTWORKS,
  MOCK_COLLECTIONS,
  MOCK_COLLECTION_ARTWORKS,
} from '../collection.model';
import {
  AddArtworkOverlayComponent,
  AddArtworkDialogResult,
} from '../add-artwork-overlay/add-artwork-overlay.component';

@Component({
  selector: 'lib-collection-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    AppSidebarComponent,
    StatusBadgeComponent,
  ],
  template: `
    <div class="page">
      <lib-app-sidebar />

      <main class="main">
        @if (collection()) {
          <!-- Breadcrumb -->
          <div class="breadcrumb">
            <mat-icon class="bc-icon" (click)="onBack()">arrow_back</mat-icon>
            <span class="bc-link" (click)="onBack()">Collections</span>
            <span class="bc-sep">/</span>
            <span class="bc-current">{{ collection()!.title }}</span>
          </div>

          <!-- Header row -->
          <div class="header-row">
            <div class="header-left">
              <h1 class="coll-title">{{ collection()!.title }}</h1>
              <p class="coll-desc">{{ collection()!.description }}</p>
              <div class="coll-meta">
                <span class="meta-text">{{ artworks().length }} artworks</span>
                <span class="meta-dot">·</span>
                <span class="meta-text">Total: {{ totalValue() | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
                <span class="coll-status-badge">{{ collection()!.status }}</span>
              </div>
            </div>
            <div class="header-right">
              <button class="edit-btn" (click)="onEdit()">
                <mat-icon class="edit-icon">edit</mat-icon>
                Edit
              </button>
              <button mat-flat-button class="add-artwork-btn" (click)="onAddArtwork()">
                <mat-icon>add</mat-icon>
                Add Artwork
              </button>
            </div>
          </div>

          <!-- Grid label -->
          <span class="grid-label">ARTWORKS IN COLLECTION</span>

          <!-- Artworks grid -->
          @if (artworks().length === 0) {
            <div class="empty-state">
              <mat-icon>collections</mat-icon>
              <p>No artworks in this collection yet. Add some!</p>
            </div>
          } @else {
            <div class="artwork-grid">
              @for (artwork of artworks(); track artwork.id) {
                <div class="artwork-card">
                  <div class="artwork-img-wrap">
                    @if (artwork.imageUrl) {
                      <img class="artwork-img" [src]="artwork.imageUrl" [alt]="artwork.title" />
                    } @else {
                      <div class="artwork-img-placeholder">
                        <mat-icon>image</mat-icon>
                      </div>
                    }
                  </div>
                  <div class="artwork-info">
                    <span class="artwork-title">{{ artwork.title }}</span>
                    <span class="artwork-year">{{ artwork.year }} · {{ artwork.medium }}</span>
                    <div class="artwork-footer">
                      <span class="artwork-price">{{ artwork.price | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
                      <lib-status-badge [status]="artwork.status" />
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        } @else {
          <div class="not-found">
            <mat-icon>search_off</mat-icon>
            <p>Collection not found.</p>
            <button mat-stroked-button (click)="onBack()">Back to Collections</button>
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
      gap: 28px;
      overflow-y: auto;
    }

    /* Breadcrumb */
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
    }
    .bc-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: var(--text-tertiary);
      cursor: pointer;
    }
    .bc-link {
      color: var(--accent-teal);
      font-weight: 500;
      cursor: pointer;
    }
    .bc-link:hover {
      text-decoration: underline;
    }
    .bc-sep {
      color: var(--text-muted);
    }
    .bc-current {
      color: var(--text-secondary);
      font-weight: 500;
    }

    /* Header row */
    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .coll-title {
      margin: 0;
      font-family: 'Newsreader', serif;
      font-size: 28px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .coll-desc {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: var(--text-secondary);
    }
    .coll-meta {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .meta-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--text-tertiary);
    }
    .meta-dot {
      color: var(--text-muted);
      font-size: 14px;
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

    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .edit-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
    }
    .edit-btn:hover {
      background: var(--bg-page);
    }
    .edit-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }
    .add-artwork-btn {
      background: var(--accent-teal) !important;
      color: #ffffff !important;
      border-radius: 8px !important;
    }

    /* Grid label */
    .grid-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
      color: var(--text-tertiary);
    }

    /* Artwork grid */
    .artwork-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .artwork-card {
      display: flex;
      flex-direction: column;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: box-shadow 0.15s;
    }
    .artwork-card:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }

    .artwork-img-wrap {
      height: 180px;
      overflow: hidden;
      background: var(--bg-page);
    }
    .artwork-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .artwork-img-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-muted);
    }
    .artwork-img-placeholder mat-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
    }

    .artwork-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px;
    }
    .artwork-title {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .artwork-year {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: var(--text-tertiary);
    }
    .artwork-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4px;
    }
    .artwork-price {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
    }

    /* Empty / not found */
    .empty-state,
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 64px 0;
      gap: 16px;
      color: var(--text-muted);
      font-family: 'Inter', sans-serif;
      font-size: 14px;
    }
    .empty-state mat-icon,
    .not-found mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
    }
    .empty-state p,
    .not-found p {
      margin: 0;
    }
  `,
})
export class CollectionDetailComponent {
  readonly id = input<string>('');

  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);

  readonly collection = computed<Collection | undefined>(() =>
    MOCK_COLLECTIONS.find((c) => c.id === this.id()),
  );

  readonly artworks = signal<CollectionArtwork[]>([]);

  readonly totalValue = computed(() =>
    this.artworks().reduce((sum, a) => sum + a.price, 0),
  );

  constructor() {
    // Load artworks whenever the collection id changes
    const loadArtworks = () => {
      const id = this.id();
      this.artworks.set(MOCK_COLLECTION_ARTWORKS[id] ?? []);
    };
    loadArtworks();
  }

  onBack(): void {
    this.router.navigate(['/collections']);
  }

  onEdit(): void {
    // TODO: open edit collection dialog
  }

  onAddArtwork(): void {
    const col = this.collection();
    if (!col) return;

    const ref = this.dialog.open<
      AddArtworkOverlayComponent,
      unknown,
      AddArtworkDialogResult
    >(AddArtworkOverlayComponent, {
      data: {
        collectionId: col.id,
        collectionTitle: col.title,
        existingArtworkIds: this.artworks().map((a) => a.id),
      },
      panelClass: 'add-artwork-panel',
      backdropClass: 'add-artwork-backdrop',
      maxWidth: '100vw',
      maxHeight: '100vh',
    });

    ref.afterClosed().subscribe((result) => {
      if (result?.addedIds.length) {
        // TODO: persist via service — for now append mock artworks
        const added = MOCK_ALL_ARTWORKS.filter((a) =>
          result.addedIds.includes(a.id),
        );
        this.artworks.update((prev) => [...prev, ...added]);
      }
    });
  }
}
