import {
  MatIcon,
  MatIconModule
} from "./chunk-4Z766CXZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  CurrencyPipe,
  Input,
  Output,
  RouterLink,
  RouterLinkActive,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YLHD6LJW.js";

// libs/ui/src/lib/status-badge/status-badge.component.ts
var StatusBadgeComponent = class _StatusBadgeComponent {
  status = input.required(...ngDevMode ? [{ debugName: "status" }] : []);
  static \u0275fac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusBadgeComponent, selectors: [["lib-status-badge"]], inputs: { status: [1, "status"] }, decls: 2, vars: 3, consts: [[1, "badge"]], template: function StatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("badge--" + ctx.status().toLowerCase());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.status());
    }
  }, styles: ['\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.badge--available[_ngcontent-%COMP%] {\n  color: var(--accent-teal);\n  background: #E8F5F5;\n}\n.badge--sold[_ngcontent-%COMP%] {\n  color: var(--accent-orange);\n  background: #FFF0E8;\n}\n.badge--reserved[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  background: var(--bg-control);\n}\n/*# sourceMappingURL=status-badge.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusBadgeComponent, [{
    type: Component,
    args: [{ selector: "lib-status-badge", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span class="badge" [class]="'badge--' + status().toLowerCase()">{{ status() }}</span>`, styles: ['/* angular:styles/component:scss;58a32f0efdffa58cf6966e840a3f6f28119e65e4c84b2db16f5938af95e0eb9e;c:/Users/fwille/Desktop/art-work/libs/ui/src/lib/status-badge/status-badge.component.ts */\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.badge--available {\n  color: var(--accent-teal);\n  background: #E8F5F5;\n}\n.badge--sold {\n  color: var(--accent-orange);\n  background: #FFF0E8;\n}\n.badge--reserved {\n  color: var(--text-tertiary);\n  background: var(--bg-control);\n}\n/*# sourceMappingURL=status-badge.component.css.map */\n'] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusBadgeComponent, { className: "StatusBadgeComponent", filePath: "libs/ui/src/lib/status-badge/status-badge.component.ts", lineNumber: 26 });
})();

// libs/ui/src/lib/artwork-card/artwork-card.component.ts
function ArtworkCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.artwork().imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.artwork().title);
  }
}
function ArtworkCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
var ArtworkCardComponent = class _ArtworkCardComponent {
  artwork = input.required(...ngDevMode ? [{ debugName: "artwork" }] : []);
  cardClick = output();
  static \u0275fac = function ArtworkCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtworkCardComponent, selectors: [["lib-artwork-card"]], inputs: { artwork: [1, "artwork"] }, outputs: { cardClick: "cardClick" }, decls: 17, vars: 11, consts: [["role", "button", "tabindex", "0", 1, "card", 3, "click", "keydown.enter"], [1, "card-image"], [3, "src", "alt"], [1, "card-image-placeholder"], [1, "card-body"], [1, "card-title"], [1, "card-meta"], [1, "card-year"], [1, "card-medium"], [1, "card-footer"], [1, "card-price"], [3, "status"]], template: function ArtworkCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ArtworkCardComponent_Template_div_click_0_listener() {
        return ctx.cardClick.emit(ctx.artwork());
      })("keydown.enter", function ArtworkCardComponent_Template_div_keydown_enter_0_listener() {
        return ctx.cardClick.emit(ctx.artwork());
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ArtworkCardComponent_Conditional_2_Template, 1, 2, "img", 2)(3, ArtworkCardComponent_Conditional_3_Template, 3, 0, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h3", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "lib-status-badge", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.artwork().imageUrl ? 2 : 3);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.artwork().title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.artwork().year);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.artwork().medium);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 6, ctx.artwork().price, "USD", "symbol", "1.0-0"));
      \u0275\u0275advance(2);
      \u0275\u0275property("status", ctx.artwork().status);
    }
  }, dependencies: [MatIconModule, MatIcon, StatusBadgeComponent, CurrencyPipe], styles: ['\n\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n  outline: none;\n}\n.card[_ngcontent-%COMP%]:hover, \n.card[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: hidden;\n  background: var(--bg-muted);\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.card-image-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Newsreader", serif;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.card-year[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-tertiary);\n  letter-spacing: 1px;\n}\n.card-medium[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-price[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=artwork-card.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkCardComponent, [{
    type: Component,
    args: [{ selector: "lib-artwork-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CurrencyPipe, MatIconModule, StatusBadgeComponent], template: `
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
  `, styles: ['/* angular:styles/component:scss;24bcd9bec555b9cec733d34ec1ed109a9cd02bccaef787467d2c38154eb07430;c:/Users/fwille/Desktop/art-work/libs/ui/src/lib/artwork-card/artwork-card.component.ts */\n.card {\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n  outline: none;\n}\n.card:hover,\n.card:focus-visible {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.card-image {\n  height: 180px;\n  overflow: hidden;\n  background: var(--bg-muted);\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.card-image-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.card-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-title {\n  margin: 0;\n  font-family: "Newsreader", serif;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.card-meta {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.card-year {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-tertiary);\n  letter-spacing: 1px;\n}\n.card-medium {\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-price {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=artwork-card.component.css.map */\n'] }]
  }], null, { artwork: [{ type: Input, args: [{ isSignal: true, alias: "artwork", required: true }] }], cardClick: [{ type: Output, args: ["cardClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtworkCardComponent, { className: "ArtworkCardComponent", filePath: "libs/ui/src/lib/artwork-card/artwork-card.component.ts", lineNumber: 130 });
})();

// libs/ui/src/lib/app-sidebar/app-sidebar.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function AppSidebarComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AppSidebarComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var AppSidebarComponent = class _AppSidebarComponent {
  manageItems = [
    { label: "All Artworks", icon: "grid_view", route: "/dashboard" },
    { label: "Recent", icon: "schedule", route: "/recent" },
    { label: "Collections", icon: "sell", route: "/collections" },
    { label: "Sales", icon: "shopping_bag", route: "/sales" },
    { label: "Clients", icon: "people", route: "/clients" }
  ];
  accountItems = [
    { label: "Settings", icon: "settings", route: "/settings" }
  ];
  static \u0275fac = function AppSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebarComponent, selectors: [["lib-app-sidebar"]], decls: 16, vars: 0, consts: [[1, "sidebar"], ["routerLink", "/dashboard", 1, "sidebar-logo"], [1, "logo-icon"], [1, "logo-text"], [1, "nav-section"], [1, "nav-label"], ["routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLink"], [1, "nav-section", "nav-section--bottom"]], template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "palette");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "ArtWork");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
      \u0275\u0275text(8, "MANAGE");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, AppSidebarComponent_For_10_Template, 5, 3, "a", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "span", 5);
      \u0275\u0275text(13, "ACCOUNT");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(14, AppSidebarComponent_For_15_Template, 5, 3, "a", 6, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.manageItems);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.accountItems);
    }
  }, dependencies: [RouterLink, RouterLinkActive, MatIconModule, MatIcon], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 260px;\n  flex-shrink: 0;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--sidebar-bg);\n  padding: 32px 20px;\n  gap: 0;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  padding-bottom: 32px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  color: var(--accent-teal);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-family: "Newsreader", serif;\n  font-size: 22px;\n  font-weight: 500;\n  color: var(--sidebar-text);\n}\n.nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-section--bottom[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.nav-label[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: var(--sidebar-text-muted);\n  padding: 0 16px 8px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: var(--sidebar-text-muted);\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.1s ease, color 0.1s ease;\n}\n.nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover);\n  color: var(--sidebar-text);\n}\n.nav-item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: var(--sidebar-text);\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: var(--sidebar-hover);\n  color: var(--sidebar-text) !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=app-sidebar.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebarComponent, [{
    type: Component,
    args: [{ selector: "lib-app-sidebar", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, RouterLinkActive, MatIconModule], template: `
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
  `, styles: ['/* angular:styles/component:scss;d2d352ef76637dfa3bb3e7cc8edb99df80b3b31f8f5aaec23133d886f53d01d6;c:/Users/fwille/Desktop/art-work/libs/ui/src/lib/app-sidebar/app-sidebar.component.ts */\n:host {\n  display: block;\n  width: 260px;\n  flex-shrink: 0;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--sidebar-bg);\n  padding: 32px 20px;\n  gap: 0;\n}\n.sidebar-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  padding-bottom: 32px;\n}\n.logo-icon {\n  color: var(--accent-teal);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.logo-text {\n  font-family: "Newsreader", serif;\n  font-size: 22px;\n  font-weight: 500;\n  color: var(--sidebar-text);\n}\n.nav-section {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-section--bottom {\n  margin-top: 32px;\n}\n.nav-label {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: var(--sidebar-text-muted);\n  padding: 0 16px 8px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: var(--sidebar-text-muted);\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.1s ease, color 0.1s ease;\n}\n.nav-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.nav-item:hover {\n  background: var(--sidebar-hover);\n  color: var(--sidebar-text);\n}\n.nav-item:hover mat-icon {\n  color: var(--sidebar-text);\n}\n.nav-item--active {\n  background: var(--sidebar-hover);\n  color: var(--sidebar-text) !important;\n}\n.nav-item--active mat-icon {\n  color: #ffffff;\n}\n/*# sourceMappingURL=app-sidebar.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebarComponent, { className: "AppSidebarComponent", filePath: "libs/ui/src/lib/app-sidebar/app-sidebar.component.ts", lineNumber: 140 });
})();

export {
  StatusBadgeComponent,
  ArtworkCardComponent,
  AppSidebarComponent
};
//# sourceMappingURL=chunk-P7P7GGIM.js.map
