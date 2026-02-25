import {
  Auth,
  DestroyRef,
  Firestore,
  Injectable,
  Router,
  addDoc,
  collection,
  computed,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  deleteDoc,
  doc,
  docData,
  getDoc,
  getDocs,
  inject,
  isSignal,
  onAuthStateChanged,
  sendPasswordResetEmail,
  serverTimestamp,
  setClassMetadata,
  setDoc,
  signInWithEmailAndPassword,
  signOut,
  signal,
  toSignal,
  untracked,
  updateDoc,
  updateProfile,
  ɵɵdefineInjectable
} from "./chunk-YLHD6LJW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
var DEEP_SIGNAL = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "DEEP_SIGNAL" : "");
function toDeepSignal(signal2) {
  return new Proxy(signal2, {
    has(target, prop) {
      return !!this.get(target, prop, void 0);
    },
    get(target, prop) {
      const value = untracked(target);
      if (!isRecord(value) || !(prop in value)) {
        if (isSignal(target[prop]) && target[prop][DEEP_SIGNAL]) {
          delete target[prop];
        }
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
        target[prop][DEEP_SIGNAL] = true;
      }
      return toDeepSignal(target[prop]);
    }
  });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
  if (value === null || typeof value !== "object" || isIterable(value)) {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype) {
    return true;
  }
  while (proto && proto !== Object.prototype) {
    if (nonRecords.includes(proto.constructor)) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.prototype;
}
function isIterable(value) {
  return typeof value?.[Symbol.iterator] === "function";
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "STATE_SOURCE" : "");
function patchState(stateSource, ...updaters) {
  const currentState = untracked(() => getState(stateSource));
  const newState = updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState);
  const signals = stateSource[STATE_SOURCE];
  const stateKeys = Reflect.ownKeys(stateSource[STATE_SOURCE]);
  for (const key of Reflect.ownKeys(newState)) {
    if (stateKeys.includes(key)) {
      const signalKey = key;
      if (currentState[signalKey] !== newState[signalKey]) {
        signals[signalKey].set(newState[signalKey]);
      }
    } else if (typeof ngDevMode !== "undefined" && ngDevMode) {
      console.warn(`@ngrx/signals: patchState was called with an unknown state slice '${String(key)}'.`, "Ensure that all state properties are explicitly defined in the initial state.", "Updates to properties not present in the initial state will be ignored.");
    }
  }
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  const signals = stateSource[STATE_SOURCE];
  return Reflect.ownKeys(stateSource[STATE_SOURCE]).reduce((state, key) => {
    const value = signals[key]();
    return __spreadProps(__spreadValues({}, state), {
      [key]: value
    });
  }, {});
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        props,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key of Reflect.ownKeys(storeMembers)) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: {},
    stateSignals: {},
    props: {},
    methods: {},
    hooks: {}
  };
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
  const overriddenKeys = Reflect.ownKeys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map((key) => String(key)).join(", "));
  }
}
function withProps(propsFactory) {
  return (store) => {
    const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(props));
    }
    return __spreadProps(__spreadValues({}, store), {
      props: __spreadValues(__spreadValues({}, store.props), props)
    });
  };
}
function withComputed(computedFactory) {
  return withProps((store) => {
    const computedResult = computedFactory(store);
    const computedResultKeys = Reflect.ownKeys(computedResult);
    return computedResultKeys.reduce((prev, key) => {
      const signalOrComputation = computedResult[key];
      return __spreadProps(__spreadValues({}, prev), {
        [key]: isSignal(signalOrComputation) ? signalOrComputation : computed(signalOrComputation)
      });
    }, {});
  });
}
function withHooks(hooksOrFactory) {
  return (store) => {
    const storeMembers = __spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods);
    const hooks = typeof hooksOrFactory === "function" ? hooksOrFactory(storeMembers) : hooksOrFactory;
    const mergeHooks = (currentHook, hook) => {
      return hook ? () => {
        if (currentHook) {
          currentHook();
        }
        hook(storeMembers);
      } : currentHook;
    };
    return __spreadProps(__spreadValues({}, store), {
      hooks: {
        onInit: mergeHooks(store.hooks.onInit, hooks.onInit),
        onDestroy: mergeHooks(store.hooks.onDestroy, hooks.onDestroy)
      }
    });
  };
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
    }
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(state);
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, stateKeys);
    }
    const stateSource = store[STATE_SOURCE];
    const stateSignals = {};
    for (const key of stateKeys) {
      stateSource[key] = signal(state[key]);
      stateSignals[key] = toDeepSignal(stateSource[key]);
    }
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

// libs/core/src/lib/firestore/user.service.ts
var UserService = class _UserService {
  firestore = inject(Firestore);
  async createUser(uid, data) {
    const userRef = doc(this.firestore, "users", uid);
    await setDoc(userRef, {
      uid,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.displayName,
      age: data.age,
      createdAt: serverTimestamp()
    });
  }
  getUserSignal(uid) {
    const userRef = doc(this.firestore, "users", uid);
    return toSignal(docData(userRef), {
      initialValue: null
    });
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/core/src/lib/auth/auth.store.ts
var initialState = {
  currentUser: null,
  isLoading: true
};
var AuthStore = signalStore({ providedIn: "root" }, withState(initialState), withComputed(({ currentUser }) => ({
  isAuthenticated: computed(() => currentUser() !== null),
  uid: computed(() => currentUser()?.uid ?? null)
})), withMethods((store) => {
  const auth = inject(Auth);
  const userService = inject(UserService);
  const router = inject(Router);
  return {
    _setCurrentUser(user) {
      patchState(store, { currentUser: user, isLoading: false });
    },
    async login(email, password) {
      await signInWithEmailAndPassword(auth, email, password);
    },
    async register(data) {
      const credential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(credential.user, { displayName: data.displayName });
      await userService.createUser(credential.user.uid, data);
    },
    async forgotPassword(email) {
      await sendPasswordResetEmail(auth, email);
    },
    async resetPassword(oobCode, newPassword) {
      await confirmPasswordReset(auth, oobCode, newPassword);
    },
    async logout() {
      await signOut(auth);
      await router.navigate(["/auth/login"]);
    }
  };
}), withHooks((store) => {
  const auth = inject(Auth);
  return {
    onInit() {
      onAuthStateChanged(auth, (user) => store._setCurrentUser(user));
    }
  };
}));

// libs/core/src/lib/firestore/artwork.service.ts
var ArtworkService = class _ArtworkService {
  firestore = inject(Firestore);
  col(uid) {
    return collection(this.firestore, `users/${uid}/artworks`);
  }
  async getAll(uid) {
    const snap = await getDocs(this.col(uid));
    return snap.docs.map((d) => __spreadValues({ id: d.id }, d.data()));
  }
  async getById(uid, id) {
    const ref = doc(this.col(uid), id);
    const snap = await getDoc(ref);
    if (!snap.exists())
      return void 0;
    return __spreadValues({ id: snap.id }, snap.data());
  }
  async create(uid, data) {
    const ref = await addDoc(this.col(uid), data);
    return ref.id;
  }
  async update(uid, id, data) {
    const ref = doc(this.col(uid), id);
    await updateDoc(ref, data);
  }
  async delete(uid, id) {
    const ref = doc(this.col(uid), id);
    await deleteDoc(ref);
  }
  static \u0275fac = function ArtworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArtworkService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArtworkService, factory: _ArtworkService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArtworkService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/core/src/lib/firestore/artwork.store.ts
var initialState2 = {
  artworks: [],
  status: "idle",
  error: null
};
var ArtworkStore = signalStore({ providedIn: "root" }, withState(initialState2), withComputed(({ artworks, status }) => ({
  isLoading: computed(() => status() === "loading"),
  totalCount: computed(() => artworks().length),
  availableCount: computed(() => artworks().filter((a) => a.status === "Available").length),
  soldCount: computed(() => artworks().filter((a) => a.status === "Sold").length),
  revenue: computed(() => artworks().filter((a) => a.status === "Sold").reduce((sum, a) => sum + a.price, 0))
})), withMethods((store) => {
  const artworkService = inject(ArtworkService);
  return {
    async loadAll(uid) {
      patchState(store, { status: "loading", error: null });
      try {
        const artworks = await artworkService.getAll(uid);
        patchState(store, { artworks, status: "loaded" });
      } catch {
        patchState(store, { status: "error", error: "Failed to load artworks." });
      }
    },
    async create(uid, data) {
      const id = await artworkService.create(uid, data);
      patchState(store, {
        artworks: [...store.artworks(), __spreadValues({ id }, data)]
      });
      return id;
    },
    async update(uid, id, data) {
      await artworkService.update(uid, id, data);
      patchState(store, {
        artworks: store.artworks().map((a) => a.id === id ? __spreadValues(__spreadValues({}, a), data) : a)
      });
    },
    async remove(uid, id) {
      await artworkService.delete(uid, id);
      patchState(store, {
        artworks: store.artworks().filter((a) => a.id !== id)
      });
    }
  };
}));

// libs/core/src/lib/auth/auth.guard.ts
var authGuard = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  if (authStore.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};
var noAuthGuard = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  if (!authStore.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/dashboard"]);
};

export {
  AuthStore,
  ArtworkService,
  ArtworkStore,
  authGuard,
  noAuthGuard
};
//# sourceMappingURL=chunk-I6VJZWCH.js.map
