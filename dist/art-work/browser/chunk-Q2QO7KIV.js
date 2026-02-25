import {
  authGuard
} from "./chunk-I6VJZWCH.js";
import "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// libs/feature-artworks/src/lib/feature-artworks.routes.ts
var artworkRoutes = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-5EIDMK7B.js").then((m) => m.ArtworkDetailComponent),
    canActivate: [authGuard]
  }
];
export {
  artworkRoutes
};
//# sourceMappingURL=chunk-Q2QO7KIV.js.map
