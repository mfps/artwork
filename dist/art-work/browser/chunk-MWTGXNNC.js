import {
  AppSidebarComponent,
  ArtworkCardComponent
} from "./chunk-P7P7GGIM.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4Z766CXZ.js";
import {
  ArtworkStore,
  AuthStore
} from "./chunk-I6VJZWCH.js";
import {
  ChangeDetectionStrategy,
  Component,
  CurrencyPipe,
  Router,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// libs/feature-dashboard/src/lib/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
    \u0275\u0275text(2, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.searchQuery() ? "No artworks match your search." : "No artworks yet. Add your first piece!");
  }
}
function DashboardComponent_Conditional_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lib-artwork-card", 23);
    \u0275\u0275listener("cardClick", function DashboardComponent_Conditional_44_For_2_Template_lib_artwork_card_cardClick_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onArtworkSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const artwork_r3 = ctx.$implicit;
    \u0275\u0275property("artwork", artwork_r3);
  }
}
function DashboardComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_44_For_2_Template, 1, 1, "lib-artwork-card", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredArtworks());
  }
}
var DashboardComponent = class _DashboardComponent {
  authStore = inject(AuthStore);
  artworkStore = inject(ArtworkStore);
  router = inject(Router);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  filteredArtworks = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q)
      return this.artworkStore.artworks();
    return this.artworkStore.artworks().filter((a) => a.title.toLowerCase().includes(q) || a.medium.toLowerCase().includes(q) || a.collection.toLowerCase().includes(q));
  }, ...ngDevMode ? [{ debugName: "filteredArtworks" }] : []);
  constructor() {
    effect(() => {
      const uid = this.authStore.uid();
      if (uid) {
        this.artworkStore.loadAll(uid);
      }
    });
  }
  onArtworkSelected(artwork) {
    this.router.navigate(["/artworks", artwork.id]);
  }
  onAddArtwork() {
    this.router.navigate(["/artworks", "new"]);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["lib-dashboard"]], decls: 45, vars: 12, consts: [[1, "page"], [1, "main"], [1, "header"], [1, "header-left"], [1, "page-title"], [1, "page-sub"], [1, "header-right"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Search artworks...", 1, "search-input", 3, "input", "value"], ["mat-flat-button", "", 1, "add-btn", 3, "click"], [1, "stats-row"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "stat-value", "stat-value--teal"], [1, "stat-value", "stat-value--orange"], [1, "grid-label"], [1, "loading-state"], [1, "empty-state"], [1, "artwork-grid"], ["diameter", "40"], [3, "artwork"], [3, "cardClick", "artwork"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "lib-app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "All Artworks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "mat-icon", 8);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275listener("input", function DashboardComponent_Template_input_input_13_listener($event) {
        return ctx.searchQuery.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_14_listener() {
        return ctx.onAddArtwork();
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Add Artwork ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "span", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 14);
      \u0275\u0275text(23, "Total Artworks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 12)(25, "span", 15);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 14);
      \u0275\u0275text(28, "Available");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 12)(30, "span", 16);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 14);
      \u0275\u0275text(33, "Sold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12)(35, "span", 13);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, "Total Revenue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "span", 17);
      \u0275\u0275text(41, "RECENT ARTWORKS");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, DashboardComponent_Conditional_42_Template, 2, 0, "div", 18)(43, DashboardComponent_Conditional_43_Template, 5, 1, "div", 19)(44, DashboardComponent_Conditional_44_Template, 3, 0, "div", 20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.artworkStore.artworks().length, " pieces in your collection");
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.searchQuery());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.artworkStore.totalCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.artworkStore.availableCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.artworkStore.soldCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(37, 7, ctx.artworkStore.revenue(), "USD", "symbol", "1.0-0"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.artworkStore.isLoading() ? 42 : ctx.filteredArtworks().length === 0 ? 43 : 44);
    }
  }, dependencies: [
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    AppSidebarComponent,
    ArtworkCardComponent,
    CurrencyPipe
  ], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-page);\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 32px 40px;\n  gap: 32px;\n  overflow-y: auto;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Newsreader", serif;\n  font-size: 32px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.page-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--text-muted);\n}\n.search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: "Inter", sans-serif;\n  font-size: 13px;\n  color: var(--text-primary);\n  width: 200px;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.add-btn[_ngcontent-%COMP%] {\n  background: var(--accent-teal) !important;\n  color: #ffffff !important;\n  border-radius: 8px !important;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 20px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-value--teal[_ngcontent-%COMP%] {\n  color: var(--accent-teal);\n}\n.stat-value--orange[_ngcontent-%COMP%] {\n  color: var(--accent-orange);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-tertiary);\n}\n.grid-label[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: var(--text-tertiary);\n}\n.artwork-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 20px;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  gap: 16px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "lib-dashboard", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CurrencyPipe,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      AppSidebarComponent,
      ArtworkCardComponent
    ], template: `
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
  `, styles: ['/* angular:styles/component:scss;e2db968e3d704b64087c6004023ef7e02ed6acf019d83a6d1882a51b24ec9284;c:/Users/fwille/Desktop/art-work/libs/feature-dashboard/src/lib/dashboard/dashboard.component.ts */\n.page {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-page);\n}\n.main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 32px 40px;\n  gap: 32px;\n  overflow-y: auto;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-left {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.page-title {\n  margin: 0;\n  font-family: "Newsreader", serif;\n  font-size: 32px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.page-sub {\n  margin: 0;\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.search-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--text-muted);\n}\n.search-input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: "Inter", sans-serif;\n  font-size: 13px;\n  color: var(--text-primary);\n  width: 200px;\n}\n.search-input::placeholder {\n  color: var(--text-muted);\n}\n.add-btn {\n  background: var(--accent-teal) !important;\n  color: #ffffff !important;\n  border-radius: 8px !important;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-card {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 20px;\n}\n.stat-value {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-value--teal {\n  color: var(--accent-teal);\n}\n.stat-value--orange {\n  color: var(--accent-orange);\n}\n.stat-label {\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-tertiary);\n}\n.grid-label {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: var(--text-tertiary);\n}\n.artwork-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 20px;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  gap: 16px;\n  color: var(--text-muted);\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.empty-state p {\n  margin: 0;\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "libs/feature-dashboard/src/lib/dashboard/dashboard.component.ts", lineNumber: 254 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-MWTGXNNC.js.map
