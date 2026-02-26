import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CollectionArtwork, MOCK_ALL_ARTWORKS } from '../collection.model';

export interface AddArtworkDialogData {
  collectionId: string;
  collectionTitle: string;
  existingArtworkIds: string[];
}

export interface AddArtworkDialogResult {
  addedIds: string[];
}

@Component({
  selector: 'lib-add-artwork-overlay',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="modal">
      <!-- Header -->
      <div class="modal-header">
        <span class="modal-title">Add Artwork to Collection</span>
        <button class="close-btn" (click)="onCancel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Search row -->
      <div class="search-row">
        <div class="search-input">
          <mat-icon class="search-icon">search</mat-icon>
          <input
            class="search-field"
            type="text"
            placeholder="Search artworks..."
            [value]="searchQuery()"
            (input)="searchQuery.set($any($event.target).value)"
          />
        </div>
        <button class="filter-btn">
          <mat-icon class="filter-icon">tune</mat-icon>
          Filter
        </button>
      </div>

      <!-- Artwork list -->
      <div class="artwork-list">
        @for (artwork of filteredArtworks(); track artwork.id) {
          <div
            class="artwork-row"
            [class.artwork-row--selected]="isSelected(artwork.id)"
            (click)="toggleSelection(artwork.id)"
          >
            <div class="artwork-thumb">
              @if (artwork.imageUrl) {
                <img [src]="artwork.imageUrl" [alt]="artwork.title" />
              } @else {
                <mat-icon class="thumb-placeholder">image</mat-icon>
              }
            </div>
            <div class="artwork-info">
              <span class="artwork-title">{{ artwork.title }}</span>
              <span class="artwork-meta">{{ artwork.year }} · {{ artwork.medium }} · {{ artwork.price | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
            </div>
            <div class="checkbox" [class.checkbox--checked]="isSelected(artwork.id)">
              @if (isSelected(artwork.id)) {
                <mat-icon class="check-icon">check</mat-icon>
              }
            </div>
          </div>
        }
        @if (filteredArtworks().length === 0) {
          <div class="empty-state">
            <mat-icon>search_off</mat-icon>
            <span>No artworks match your search</span>
          </div>
        }
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <span class="selection-count">
          @if (selectedIds().size > 0) {
            {{ selectedIds().size }} artwork{{ selectedIds().size === 1 ? '' : 's' }} selected
          } @else {
            No artworks selected
          }
        </span>
        <div class="footer-btns">
          <button class="cancel-btn" (click)="onCancel()">Cancel</button>
          <button
            class="add-btn"
            [disabled]="selectedIds().size === 0"
            (click)="onAddSelected()"
          >
            <mat-icon>add</mat-icon>
            Add Selected
          </button>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .modal {
      display: flex;
      flex-direction: column;
      width: 680px;
      max-height: 620px;
      background: var(--bg-card);
      border-radius: 16px;
      overflow: hidden;
    }

    /* Header */
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid var(--border-divider, var(--border-primary));
      flex-shrink: 0;
    }
    .modal-title {
      font-family: 'Newsreader', serif;
      font-size: 20px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: transparent;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      color: var(--text-tertiary);
      transition: background 0.15s;
    }
    .close-btn:hover {
      background: var(--bg-page);
    }
    .close-btn mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    /* Search row */
    .search-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 24px;
      flex-shrink: 0;
    }
    .search-input {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--bg-muted, var(--bg-page));
      border-radius: 8px;
      padding: 10px 14px;
    }
    .search-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: var(--text-tertiary);
    }
    .search-field {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-primary);
    }
    .search-field::placeholder {
      color: var(--text-muted);
    }
    .filter-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary);
      white-space: nowrap;
    }
    .filter-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    /* Artwork list */
    .artwork-list {
      flex: 1;
      overflow-y: auto;
      padding: 0 24px;
      min-height: 0;
    }
    .artwork-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--border-divider, var(--border-primary));
      cursor: pointer;
      transition: background 0.1s;
      border-radius: 4px;
    }
    .artwork-row:last-child {
      border-bottom: none;
    }
    .artwork-row:hover {
      background: var(--bg-page);
    }
    .artwork-row--selected {
      background: color-mix(in srgb, var(--accent-teal) 6%, transparent);
    }

    .artwork-thumb {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      overflow: hidden;
      background: var(--bg-page);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .artwork-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .thumb-placeholder {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--text-muted);
    }

    .artwork-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }
    .artwork-title {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .artwork-meta {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: var(--text-secondary);
    }

    .checkbox {
      width: 22px;
      height: 22px;
      border-radius: 4px;
      border: 1.5px solid var(--border-primary);
      background: var(--bg-card);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s, border-color 0.15s;
    }
    .checkbox--checked {
      background: var(--accent-teal);
      border-color: var(--accent-teal);
    }
    .check-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      color: #ffffff;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 0;
      gap: 12px;
      color: var(--text-muted);
      font-family: 'Inter', sans-serif;
      font-size: 13px;
    }
    .empty-state mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    /* Footer */
    .modal-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      border-top: 1px solid var(--border-divider, var(--border-primary));
      flex-shrink: 0;
    }
    .selection-count {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-tertiary);
    }
    .footer-btns {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .cancel-btn {
      padding: 10px 20px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary);
    }
    .cancel-btn:hover {
      background: var(--bg-page);
    }
    .add-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 20px;
      background: var(--accent-teal);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      transition: opacity 0.15s;
    }
    .add-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .add-btn mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }
  `,
})
export class AddArtworkOverlayComponent {
  private readonly dialogRef =
    inject<MatDialogRef<AddArtworkOverlayComponent, AddArtworkDialogResult>>(MatDialogRef);
  readonly data = inject<AddArtworkDialogData>(MAT_DIALOG_DATA);

  readonly searchQuery = signal('');
  readonly selectedIds = signal<Set<string>>(new Set(this.data.existingArtworkIds));

  private readonly allAvailable: CollectionArtwork[] = MOCK_ALL_ARTWORKS.filter(
    (a) => !this.data.existingArtworkIds.includes(a.id),
  );

  readonly filteredArtworks = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.allAvailable;
    return this.allAvailable.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.medium.toLowerCase().includes(q),
    );
  });

  isSelected(id: string): boolean {
    return this.selectedIds().has(id);
  }

  toggleSelection(id: string): void {
    this.selectedIds.update((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  onAddSelected(): void {
    this.dialogRef.close({ addedIds: Array.from(this.selectedIds()) });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
