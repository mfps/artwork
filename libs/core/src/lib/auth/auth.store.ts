import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  User as FirebaseUser,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { RegisterInput } from '../models/user.model';
import { UserService } from '../firestore/user.service';

interface AuthState {
  currentUser: FirebaseUser | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  isLoading: true,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed(({ currentUser }) => ({
    isAuthenticated: computed(() => currentUser() !== null),
    uid: computed(() => currentUser()?.uid ?? null),
  })),

  withMethods((store) => {
    const auth = inject(Auth);
    const userService = inject(UserService);
    const router = inject(Router);

    return {
      _setCurrentUser(user: FirebaseUser | null): void {
        patchState(store, { currentUser: user, isLoading: false });
      },

      async login(email: string, password: string): Promise<void> {
        await signInWithEmailAndPassword(auth, email, password);
      },

      async register(data: RegisterInput): Promise<void> {
        const credential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        await updateProfile(credential.user, { displayName: data.displayName });
        await userService.createUser(credential.user.uid, data);
      },

      async forgotPassword(email: string): Promise<void> {
        await sendPasswordResetEmail(auth, email);
      },

      async resetPassword(oobCode: string, newPassword: string): Promise<void> {
        await confirmPasswordReset(auth, oobCode, newPassword);
      },

      async logout(): Promise<void> {
        await signOut(auth);
        await router.navigate(['/auth/login']);
      },
    };
  }),

  withHooks((store) => {
    const auth = inject(Auth);
    return {
      onInit(): void {
        onAuthStateChanged(auth, (user) => store._setCurrentUser(user));
      },
    };
  }),
);

export type AuthStore = InstanceType<typeof AuthStore>;
