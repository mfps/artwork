import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Artwork } from '@art-work/core';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'lib-artwork-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatIconModule, StatusBadgeComponent],
  template: `
    <div
      class="card"
      role="button"
      tabindex="0"
      (click)="cardClick.emit(artwork())"
      (keydown.enter)="cardClick.emit(artwork())"
    >
      <div class="card-image">
        @if (artwork().imageUrl) {
          <img [src]="artwork().imageUrl" [alt]="artwork().title" />
        } @else {
          <div class="card-image-placeholder">
            <mat-icon>image</mat-icon>
          </div>
        }
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ artwork().title }}</h3>
        <div class="card-meta">
          <span class="card-year">{{ artwork().year }}</span>
          <span class="card-medium">{{ artwork().medium }}</span>
        </div>
        <div class="card-footer">
          <span class="card-price">{{ artwork().price | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
          <lib-status-badge [status]="artwork().status" />
        </div>
      </div>
    </div>
  `,
  styles: `
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: box-shadow 0.15s ease, transform 0.15s ease;
      outline: none;
    }
    .card:hover,
    .card:focus-visible {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-image {
      height: 180px;
      overflow: hidden;
      background: var(--bg-muted);
    }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .card-image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
    }

    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .card-title {
      margin: 0;
      font-family: 'Newsreader', serif;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary);
      line-height: 1.3;
    }

    .card-meta {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .card-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--text-tertiary);
      letter-spacing: 1px;
    }
    .card-medium {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: var(--text-secondary);
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-price {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 700;
      color: var(--text-primary);
    }
  `,
})
export class ArtworkCardComponent {
  readonly artwork = input.required<Artwork>();
  readonly cardClick = output<Artwork>();
}
