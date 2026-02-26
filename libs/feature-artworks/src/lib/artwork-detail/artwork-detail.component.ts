import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  resource,
  signal,
} from '@angular/core';
import {
  form,
  FormField,
  submit,
  validateStandardSchema,
} from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, ɵEmptyOutletComponent } from '@angular/router';
import { ArtworkService, AuthStore } from '@art-work/core';
import { AppSidebarComponent, StatusBadgeComponent } from '@art-work/ui';
import { ArtworkFormModel, artworkFormSchema } from './artwork-detail.schema';

@Component({
  selector: 'lib-artwork-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIcon,
    MatProgressSpinnerModule,
    AppSidebarComponent,
    StatusBadgeComponent
],
  template: `
    <div class="page">
      <lib-app-sidebar />

      <main class="main">
        <div class="breadcrumb">
          <mat-icon class="bc-icon">arrow_back</mat-icon>
          <a class="bc-link" routerLink="/dashboard">All Artworks</a>
          <span class="bc-sep">/</span>
          <span class="bc-current">{{
            artworkResource.value()?.title ??
              (id() === 'new' ? 'New Artwork' : '…')
          }}</span>
        </div>

        @if (artworkResource.isLoading()) {
          <div class="loading-state">
            <mat-spinner diameter="40" />
          </div>
        } @else {
          <div class="detail-body">
            <!-- Image column -->
            <div class="img-col">
              @if (artworkResource.value()?.imageUrl) {
                <img
                  class="artwork-img"
                  [src]="artworkResource.value()!.imageUrl"
                  [alt]="artworkResource.value()!.title"
                />
              } @else {
                <div class="artwork-img-placeholder">
                  <mat-icon>image</mat-icon>
                  <span>No image</span>
                </div>
              }
            </div>

            <!-- Form column -->
            <div class="form-col">
              <div class="form-header">
                <h2 class="form-title">Artwork Details</h2>
                <lib-status-badge [status]="artworkModel().status" />
              </div>

              <form class="artwork-form" (submit)="onSave($event)">
                <!-- Title -->
                <mat-form-field appearance="outline">
                  <mat-label>Title</mat-label>
                  <input matInput [formField]="artworkForm.title" />
                  @if (
                    artworkForm.title().touched() &&
                    artworkForm.title().invalid()
                  ) {
                    <mat-error>{{
                      artworkForm.title().errors()[0]?.message
                    }}</mat-error>
                  }
                </mat-form-field>

                <!-- Year + Medium -->
                <div class="field-row">
                  <mat-form-field appearance="outline">
                    <mat-label>Year</mat-label>
                    <input matInput [formField]="artworkForm.year" />
                    @if (
                      artworkForm.year().touched() &&
                      artworkForm.year().invalid()
                    ) {
                      <mat-error>{{
                        artworkForm.year().errors()[0]?.message
                      }}</mat-error>
                    }
                  </mat-form-field>

                  <mat-form-field appearance="outline">
                    <mat-label>Medium</mat-label>
                    <input matInput [formField]="artworkForm.medium" />
                    @if (
                      artworkForm.medium().touched() &&
                      artworkForm.medium().invalid()
                    ) {
                      <mat-error>{{
                        artworkForm.medium().errors()[0]?.message
                      }}</mat-error>
                    }
                  </mat-form-field>
                </div>

                <!-- Dimensions + Price -->
                <div class="field-row">
                  <mat-form-field appearance="outline">
                    <mat-label>Dimensions</mat-label>
                    <input
                      matInput
                      [formField]="artworkForm.dimensions"
                      placeholder="24 × 36 in"
                    />
                  </mat-form-field>

                  <mat-form-field appearance="outline">
                    <mat-label>Price ($)</mat-label>
                    <input matInput [formField]="artworkForm.price" />
                    @if (
                      artworkForm.price().touched() &&
                      artworkForm.price().invalid()
                    ) {
                      <mat-error>{{
                        artworkForm.price().errors()[0]?.message
                      }}</mat-error>
                    }
                  </mat-form-field>
                </div>

                <!-- Description -->
                <mat-form-field appearance="outline">
                  <mat-label>Description</mat-label>
                  <textarea
                    matInput
                    rows="3"
                    [formField]="artworkForm.description"
                  ></textarea>
                </mat-form-field>

                <!-- Collection + Status -->
                <div class="field-row">
                  <mat-form-field appearance="outline">
                    <mat-label>Collection</mat-label>
                    <input matInput [formField]="artworkForm.collection" />
                  </mat-form-field>

                  <mat-form-field appearance="outline">
                    <mat-label>Status</mat-label>
                    <mat-select
                      [value]="artworkModel().status"
                      (valueChange)="updateArtworkStatus($event)"
                    >
                      <mat-option value="Available">Available</mat-option>
                      <mat-option value="Sold">Sold</mat-option>
                      <mat-option value="Reserved">Reserved</mat-option>
                    </mat-select>
                  </mat-form-field>
                </div>

                <!-- Category -->
                <mat-form-field appearance="outline">
                  <mat-label>Category</mat-label>
                  <mat-select
                    [value]="artworkModel().category"
                    (valueChange)="updateArtworkCategory($event)"
                  >
                    @for (cat of categories; track cat) {
                      <mat-option [value]="cat">{{ cat }}</mat-option>
                    }
                  </mat-select>
                </mat-form-field>

                <!-- Location -->
                <mat-form-field appearance="outline">
                  <mat-label>Location</mat-label>
                  <input
                    matInput
                    [formField]="artworkForm.location"
                    placeholder="Studio — Shelf A3"
                  />
                </mat-form-field>

                <!-- Actions -->
                <div class="actions">
                  <button mat-flat-button type="submit" [disabled]="isSaving()">
                    @if (isSaving()) {
                      <mat-spinner diameter="18" />
                    } @else {
                      <ng-container>
                        <mat-icon>save</mat-icon>
                        Save Changes
                      </ng-container>
                    }
                  </button>

                  @if (id() !== 'new') {
                    <button
                      mat-stroked-button
                      type="button"
                      class="delete-btn"
                      [disabled]="isDeleting()"
                      (click)="onDelete()"
                    >
                      @if (isDeleting()) {
                        <mat-spinner diameter="18" />
                      } @else {
                        <ng-container>
                          <mat-icon>delete</mat-icon>
                          Delete
                        </ng-container>
                      }
                    </button>
                  }
                </div>

                @if (errorMessage()) {
                  <mat-error class="form-error">{{ errorMessage() }}</mat-error>
                }
              </form>
            </div>
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
      overflow-y: auto;
      gap: 24px;
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
      text-decoration: none;
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

    .loading-state {
      display: flex;
      justify-content: center;
      padding: 64px 0;
    }

    /* Detail body */
    .detail-body {
      display: flex;
      gap: 32px;
      flex: 1;
      min-height: 0;
    }

    .img-col {
      flex: 1;
      min-width: 0;
    }
    .artwork-img {
      width: 100%;
      height: 100%;
      max-height: 600px;
      object-fit: cover;
      border-radius: 12px;
      display: block;
    }
    .artwork-img-placeholder {
      width: 100%;
      height: 300px;
      border-radius: 12px;
      background: var(--bg-muted);
      border: 1px solid var(--border-primary);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: var(--text-muted);
    }

    .form-col {
      width: 400px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
    }

    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .form-title {
      margin: 0;
      font-family: 'Newsreader', serif;
      font-size: 24px;
      font-weight: 500;
      color: var(--text-primary);
    }

    .artwork-form {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .artwork-form mat-form-field {
      width: 100%;
    }

    .field-row {
      display: flex;
      gap: 16px;
    }
    .field-row mat-form-field {
      flex: 1;
    }

    .actions {
      display: flex;
      gap: 12px;
      padding-top: 12px;
    }
    .delete-btn {
      color: var(--accent-orange) !important;
      border-color: var(--accent-orange) !important;
    }

    .form-error {
      display: block;
      margin-top: 8px;
      font-size: 13px;
    }
  `,
})
export class ArtworkDetailComponent {
  readonly id = input<string>('');

  private readonly authStore = inject(AuthStore);
  private readonly artworkService = inject(ArtworkService);
  private readonly router = inject(Router);

  readonly isSaving = signal(false);
  readonly isDeleting = signal(false);
  readonly errorMessage = signal('');

  readonly categories = [
    'Painting',
    'Sculpture',
    'Photography',
    'Drawing',
    'Print',
    'Mixed Media',
    'Digital',
    'Other',
  ];

  readonly artworkResource = resource({
    params: this.id,
    loader: async ({ params: id }) => {
      const uid = this.authStore.uid();
      if (!uid || !id || id === 'new') return null;
      return await this.artworkService.getById(uid, id);
    },
  });

  readonly artworkModel = signal<ArtworkFormModel>({
    title: '',
    year: String(new Date().getFullYear()),
    medium: '',
    dimensions: '',
    price: '',
    description: '',
    collection: '',
    status: 'Available',
    category: '',
    location: '',
  });

  readonly artworkForm = form(this.artworkModel, (s) => {
    validateStandardSchema(s, artworkFormSchema);
  });

  constructor() {
    effect(() => {
      const artwork = this.artworkResource.value();
      if (artwork) {
        this.artworkModel.set({
          title: artwork.title,
          year: String(artwork.year),
          medium: artwork.medium,
          dimensions: artwork.dimensions,
          price: String(artwork.price),
          description: artwork.description,
          collection: artwork.collection,
          status: artwork.status,
          category: artwork.category,
          location: artwork.location,
        });
      }
    });
  }

  onSave(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    submit(this.artworkForm, async () => {
      this.isSaving.set(true);
      try {
        const uid = this.authStore.uid();
        if (!uid) throw new Error('Not authenticated');

        const model = this.artworkModel();
        const data = {
          title: model.title,
          year: parseInt(model.year, 10),
          medium: model.medium,
          dimensions: model.dimensions,
          price: parseFloat(model.price),
          description: model.description,
          collection: model.collection,
          status: model.status,
          category: model.category,
          location: model.location,
          imageUrl: this.artworkResource.value()?.imageUrl ?? '',
        };

        const currentId = this.id();
        if (!currentId || currentId === 'new') {
          await this.artworkService.create(uid, data);
        } else {
          await this.artworkService.update(uid, currentId, data);
        }
        await this.router.navigate(['/dashboard']);
      } catch (err) {
        this.errorMessage.set(
          err instanceof Error ? err.message : 'Failed to save',
        );
      } finally {
        this.isSaving.set(false);
      }
    });
  }

  async onDelete(): Promise<void> {
    const uid = this.authStore.uid();
    const currentId = this.id();
    if (!uid || !currentId || currentId === 'new') return;

    this.isDeleting.set(true);
    try {
      await this.artworkService.delete(uid, currentId);
      await this.router.navigate(['/dashboard']);
    } catch (err) {
      this.errorMessage.set(
        err instanceof Error ? err.message : 'Failed to delete',
      );
      this.isDeleting.set(false);
    }
  }

  updateArtworkStatus(newStatus: 'Available' | 'Sold' | 'Reserved'): void {
    this.artworkModel.update((m) => ({ ...m, status: newStatus }));
  }

  updateArtworkCategory(newCategory: string): void {
    this.artworkModel.update((m) => ({ ...m, category: newCategory }));
  }
}
