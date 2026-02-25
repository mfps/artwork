import { Injectable, computed, inject, signal } from '@angular/core';
import {
  Auth,
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  confirmPasswordReset,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { RegisterInput } from '../models/user.model';
import { UserService } from '../firestore/user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  private readonly _currentUser = signal<FirebaseUser | null>(null);
  private readonly _loading = signal(true);

  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);
  readonly isLoading = this._loading.asReadonly();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this._currentUser.set(user);
      this._loading.set(false);
    });
  }

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(data: RegisterInput): Promise<void> {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      data.email,
      data.password,
    );
    await updateProfile(credential.user, { displayName: data.displayName });
    await this.userService.createUser(credential.user.uid, data);
  }

  async forgotPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(this.auth, email);
  }

  async resetPassword(oobCode: string, newPassword: string): Promise<void> {
    await confirmPasswordReset(this.auth, oobCode, newPassword);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    await this.router.navigate(['/auth/login']);
  }
}
