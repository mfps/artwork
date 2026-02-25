import {
  noAuthGuard
} from "./chunk-I6VJZWCH.js";
import "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// libs/feature-auth/src/lib/feature-auth.routes.ts
var authRoutes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-OU6TVZCQ.js").then((m) => m.LoginComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-T4FANJKF.js").then((m) => m.RegisterComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "forgot-password",
    loadComponent: () => import("./chunk-HSGBIBO4.js").then((m) => m.ForgotPasswordComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "reset-password",
    loadComponent: () => import("./chunk-DF5CWKOI.js").then((m) => m.ResetPasswordComponent)
  }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-BL3GRXOD.js.map
