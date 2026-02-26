import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppSidebarComponent } from '@art-work/ui';

type SaleStatus = 'Completed' | 'Shipped' | 'Pending';
type TimePeriod = 'Last 12 months' | 'Last 6 months' | 'This year';

interface Sale {
  id: string;
  artworkTitle: string;
  artworkImageUrl: string;
  buyer: string;
  date: string;
  price: number;
  status: SaleStatus;
}

interface Buyer {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  artworkCount: number;
  totalValue: number;
}

interface MonthBar {
  month: string;
  value: number;
  heightPx: number;
  variant: 'default' | 'teal' | 'orange';
}

const MAX_BAR_HEIGHT = 130;

const RAW_BARS: { month: string; value: number; heightPx: number }[] = [
  { month: 'Jan', value: 1800, heightPx: 40 },
  { month: 'Feb', value: 1200, heightPx: 28 },
  { month: 'Mar', value: 3200, heightPx: 72 },
  { month: 'Apr', value: 2500, heightPx: 56 },
  { month: 'May', value: 4200, heightPx: 95 },
  { month: 'Jun', value: 2100, heightPx: 48 },
  { month: 'Jul', value: 4900, heightPx: 110 },
  { month: 'Aug', value: 2800, heightPx: 64 },
  { month: 'Sep', value: 3500, heightPx: 80 },
  { month: 'Oct', value: 5800, heightPx: 130 },
  { month: 'Nov', value: 3900, heightPx: 88 },
  { month: 'Dec', value: 2300, heightPx: 52 },
];

const TEAL_MONTHS = new Set(['Mar', 'May', 'Jul', 'Sep', 'Nov']);
const ORANGE_MONTHS = new Set(['Oct']);

const MONTH_BARS: MonthBar[] = RAW_BARS.map((b) => ({
  ...b,
  variant: ORANGE_MONTHS.has(b.month)
    ? 'orange'
    : TEAL_MONTHS.has(b.month)
      ? 'teal'
      : 'default',
}));

const MOCK_SALES: Sale[] = [
  {
    id: 's1',
    artworkTitle: 'Sunset Over Mountains',
    artworkImageUrl: '',
    buyer: 'Marcus Rivera',
    date: 'Oct 15, 2025',
    price: 2400,
    status: 'Completed',
  },
  {
    id: 's2',
    artworkTitle: 'Urban Footprints No. 7',
    artworkImageUrl: '',
    buyer: 'Sofia Chen',
    date: 'Sep 28, 2025',
    price: 3100,
    status: 'Completed',
  },
  {
    id: 's3',
    artworkTitle: 'Ephemeral Light III',
    artworkImageUrl: '',
    buyer: 'James Kowalski',
    date: 'Aug 12, 2025',
    price: 1800,
    status: 'Shipped',
  },
  {
    id: 's4',
    artworkTitle: 'Coral Reef Study',
    artworkImageUrl: '',
    buyer: 'Aisha Laurent',
    date: 'Jul 3, 2025',
    price: 2200,
    status: 'Completed',
  },
];

const MOCK_BUYERS: Buyer[] = [
  { id: 'b1', name: 'Marcus Rivera', initials: 'MR', avatarColor: 'var(--accent-teal)', artworkCount: 5, totalValue: 12400 },
  { id: 'b2', name: 'Sofia Chen', initials: 'SC', avatarColor: 'var(--accent-orange)', artworkCount: 4, totalValue: 8600 },
  { id: 'b3', name: 'James Kowalski', initials: 'JK', avatarColor: '#6B7280', artworkCount: 3, totalValue: 6200 },
  { id: 'b4', name: 'Aisha Laurent', initials: 'AL', avatarColor: '#8B5CF6', artworkCount: 3, totalValue: 4800 },
];

@Component({
  selector: 'lib-sales',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatButtonModule, MatIconModule, MatMenuModule, AppSidebarComponent],
  template: `
    <div class="page">
      <lib-app-sidebar />

      <main class="main">

        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <h1 class="page-title">Sales</h1>
            <p class="page-sub">Track revenue, buyers, and sold artworks</p>
          </div>
          <div class="header-right">
            <button class="period-btn" [matMenuTriggerFor]="periodMenu">
              <mat-icon class="period-icon">calendar_today</mat-icon>
              {{ activePeriod() }}
              <mat-icon class="chevron-icon">expand_more</mat-icon>
            </button>
            <mat-menu #periodMenu="matMenu">
              @for (p of periods; track p) {
                <button mat-menu-item (click)="activePeriod.set(p)">
                  @if (activePeriod() === p) {
                    <mat-icon>check</mat-icon>
                  }
                  {{ p }}
                </button>
              }
            </mat-menu>
            <button class="export-btn">
              <mat-icon class="export-icon">download</mat-icon>
              Export
            </button>
          </div>
        </div>

        <!-- Stats row -->
        <div class="stats-row">
          <div class="stat-card">
            <span class="stat-value">{{ stats().totalRevenue | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
            <span class="stat-label">Total Revenue</span>
            <span class="stat-change stat-change--teal">+24% from last year</span>
          </div>
          <div class="stat-card">
            <span class="stat-value stat-value--orange">{{ stats().artworksSold }}</span>
            <span class="stat-label">Artworks Sold</span>
            <span class="stat-change stat-change--teal">+6 this quarter</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">{{ stats().avgSalePrice | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
            <span class="stat-label">Avg. Sale Price</span>
            <span class="stat-change stat-change--teal">+12% from last year</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">{{ stats().uniqueBuyers }}</span>
            <span class="stat-label">Unique Buyers</span>
            <span class="stat-change stat-change--teal">3 returning clients</span>
          </div>
        </div>

        <!-- Mid row: chart + top buyers -->
        <div class="mid-row">

          <!-- Revenue chart -->
          <div class="chart-card">
            <div class="chart-header">
              <span class="chart-title">Revenue Over Time</span>
              <span class="chart-period">Jan — Dec 2025</span>
            </div>
            <div class="chart-area">
              @for (bar of bars; track bar.month) {
                <div class="bar-col">
                  <div
                    class="bar-rect"
                    [class.bar-rect--teal]="bar.variant === 'teal'"
                    [class.bar-rect--orange]="bar.variant === 'orange'"
                    [style.height.px]="bar.heightPx"
                  ></div>
                  <span class="bar-label">{{ bar.month }}</span>
                </div>
              }
            </div>
          </div>

          <!-- Top buyers -->
          <div class="buyers-card">
            <div class="buyers-header">
              <span class="buyers-title">Top Buyers</span>
              <span class="buyers-link">View all</span>
            </div>
            @for (buyer of buyers; track buyer.id; let last = $last) {
              <div class="buyer-row">
                <div class="buyer-avatar" [style.background]="buyer.avatarColor">
                  {{ buyer.initials }}
                </div>
                <div class="buyer-info">
                  <span class="buyer-name">{{ buyer.name }}</span>
                  <span class="buyer-detail">{{ buyer.artworkCount }} artworks · {{ buyer.totalValue | currency: 'USD' : 'symbol' : '1.0-0' }}</span>
                </div>
              </div>
              @if (!last) {
                <div class="buyer-divider"></div>
              }
            }
          </div>

        </div>

        <!-- Recent sales table -->
        <div class="table-card">
          <div class="table-header">
            <span class="table-title">Recent Sales</span>
            <span class="table-count">{{ sales().length }} total sales</span>
          </div>
          <div class="table-divider"></div>
          <div class="table-head-row">
            <div class="th" style="width:240px">ARTWORK</div>
            <div class="th th--fill">BUYER</div>
            <div class="th" style="width:120px">DATE</div>
            <div class="th" style="width:120px">PRICE</div>
            <div class="th" style="width:100px">STATUS</div>
          </div>
          @for (sale of filteredSales(); track sale.id) {
            <div class="table-row">
              <div class="td td--artwork" style="width:240px">
                <div class="artwork-thumb">
                  @if (sale.artworkImageUrl) {
                    <img [src]="sale.artworkImageUrl" [alt]="sale.artworkTitle" />
                  } @else {
                    <mat-icon class="thumb-icon">image</mat-icon>
                  }
                </div>
                <span class="artwork-name">{{ sale.artworkTitle }}</span>
              </div>
              <div class="td td--fill">{{ sale.buyer }}</div>
              <div class="td" style="width:120px">{{ sale.date }}</div>
              <div class="td td--price" style="width:120px">{{ sale.price | currency: 'USD' : 'symbol' : '1.0-0' }}</div>
              <div class="td" style="width:100px">
                <span
                  class="sale-badge"
                  [class.sale-badge--completed]="sale.status === 'Completed'"
                  [class.sale-badge--shipped]="sale.status === 'Shipped'"
                  [class.sale-badge--pending]="sale.status === 'Pending'"
                >{{ sale.status }}</span>
              </div>
            </div>
          }
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
      gap: 28px;
      overflow-y: auto;
    }

    /* ── Header ──────────────────────────────────────── */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    .period-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .period-btn:hover {
      background: var(--bg-page);
    }
    .period-icon,
    .chevron-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: var(--text-muted);
    }
    .export-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: var(--accent-teal);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
    }
    .export-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    /* ── Stats row ───────────────────────────────────── */
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
    .stat-value--orange {
      color: var(--accent-orange);
    }
    .stat-label {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: var(--text-tertiary);
    }
    .stat-change {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
    }
    .stat-change--teal {
      color: var(--accent-teal);
    }

    /* ── Mid row ─────────────────────────────────────── */
    .mid-row {
      display: flex;
      gap: 20px;
    }

    /* Revenue chart */
    .chart-card {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      padding: 24px;
    }
    .chart-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chart-title {
      font-family: 'Newsreader', serif;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .chart-period {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--text-tertiary);
    }
    .chart-area {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      height: 160px;
      padding-bottom: 24px;
    }
    .bar-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      gap: 6px;
    }
    .bar-rect {
      width: 100%;
      border-radius: 4px 4px 0 0;
      background: var(--bg-control, #E5E7EB);
      transition: height 0.3s ease;
    }
    .bar-rect--teal {
      background: var(--accent-teal);
    }
    .bar-rect--orange {
      background: var(--accent-orange);
    }
    .bar-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 600;
      color: var(--text-tertiary);
      white-space: nowrap;
    }

    /* Top buyers */
    .buyers-card {
      width: 340px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      padding: 24px;
    }
    .buyers-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .buyers-title {
      font-family: 'Newsreader', serif;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .buyers-link {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: var(--accent-teal);
      cursor: pointer;
    }
    .buyer-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .buyer-avatar {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
    }
    .buyer-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .buyer-name {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .buyer-detail {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text-tertiary);
    }
    .buyer-divider {
      height: 1px;
      background: var(--border-divider, var(--border-primary));
    }

    /* ── Recent sales table ──────────────────────────── */
    .table-card {
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      overflow: hidden;
    }
    .table-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px;
    }
    .table-title {
      font-family: 'Newsreader', serif;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .table-count {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--text-tertiary);
    }
    .table-divider {
      height: 1px;
      background: var(--border-divider, var(--border-primary));
    }
    .table-head-row {
      display: flex;
      align-items: center;
      padding: 12px 24px;
      background: var(--bg-muted, var(--bg-page));
    }
    .th {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 2px;
      color: var(--text-tertiary);
      flex-shrink: 0;
    }
    .th--fill {
      flex: 1;
    }
    .table-row {
      display: flex;
      align-items: center;
      padding: 14px 24px;
      border-bottom: 1px solid var(--border-divider, var(--border-primary));
    }
    .table-row:last-child {
      border-bottom: none;
    }
    .td {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-secondary);
      flex-shrink: 0;
    }
    .td--fill {
      flex: 1;
    }
    .td--artwork {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text-primary);
      font-weight: 500;
    }
    .td--price {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: var(--text-primary);
    }
    .artwork-thumb {
      width: 36px;
      height: 36px;
      border-radius: 6px;
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
    .thumb-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: var(--text-muted);
    }
    .artwork-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 180px;
    }

    /* Sale status badges */
    .sale-badge {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
    .sale-badge--completed {
      background: color-mix(in srgb, var(--accent-teal) 15%, transparent);
      color: var(--accent-teal);
    }
    .sale-badge--shipped {
      background: color-mix(in srgb, var(--accent-orange) 15%, transparent);
      color: var(--accent-orange);
    }
    .sale-badge--pending {
      background: var(--bg-control, #F3F4F6);
      color: var(--text-tertiary);
    }
  `,
})
export class SalesComponent {
  readonly activePeriod = signal<TimePeriod>('Last 12 months');

  readonly periods: TimePeriod[] = ['Last 12 months', 'Last 6 months', 'This year'];

  readonly bars: MonthBar[] = MONTH_BARS;
  readonly buyers: Buyer[] = MOCK_BUYERS;

  readonly sales = signal<Sale[]>(MOCK_SALES);

  readonly stats = computed(() => {
    const s = this.sales();
    const total = s.reduce((acc, x) => acc + x.price, 0);
    return {
      totalRevenue: 34200,
      artworksSold: 18,
      avgSalePrice: 1900,
      uniqueBuyers: 12,
    };
  });

  readonly filteredSales = computed(() => this.sales());

}
