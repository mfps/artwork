import {
  Component,
  RouterOutlet,
  bootstrapApplication,
  getAuth,
  getFirestore,
  initializeApp,
  provideAuth,
  provideBrowserGlobalErrorListeners,
  provideFirebaseApp,
  provideFirestore,
  provideRouter,
  setClassMetadata,
  withComponentInputBinding,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// src/app/app.routes.ts
var appRoutes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./chunk-BL3GRXOD.js").then((m) => m.authRoutes)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./chunk-FMSEKY4U.js").then((m) => m.dashboardRoutes)
  },
  {
    path: "artworks",
    loadChildren: () => import("./chunk-Q2QO7KIV.js").then((m) => m.artworkRoutes)
  },
  { path: "**", redirectTo: "/auth/login" }
];

// src/environments/environment.ts
var environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      imports: [RouterOutlet],
      selector: "app-root",
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 9 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
