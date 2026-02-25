import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArtworkStatus } from '@art-work/core';

@Component({
  selector: 'lib-status-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="badge" [class]="'badge--' + status().toLowerCase()">{{ status() }}</span>`,
  styles: `
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
    .badge--available { color: var(--accent-teal); background: #E8F5F5; }
    .badge--sold      { color: var(--accent-orange); background: #FFF0E8; }
    .badge--reserved  { color: var(--text-tertiary); background: var(--bg-control); }
  `,
})
export class StatusBadgeComponent {
  readonly status = input.required<ArtworkStatus>();
}
