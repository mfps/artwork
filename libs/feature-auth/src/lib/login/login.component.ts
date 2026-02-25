import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { form, FormField, submit, validateStandardSchema } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthStore } from '@art-work/core';
import { loginSchema, LoginModel } from './login.schema';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [
    FormField,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="auth-page">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-card-title>Sign In</mat-card-title>
          <mat-card-subtitle>Welcome back</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          @if (errorMessage()) {
            <mat-error class="banner-error">{{ errorMessage() }}</mat-error>
          }

          <form class="auth-form" (submit)="onSubmit($event)">
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input
                matInput
                type="email"
                [formField]="loginForm.email"
                autocomplete="email"
              />
              <mat-icon matSuffix>email</mat-icon>
              @if (loginForm.email().touched() && loginForm.email().invalid()) {
                <mat-error>{{ loginForm.email().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input
                matInput
                [type]="hidePassword() ? 'password' : 'text'"
                [formField]="loginForm.password"
                autocomplete="current-password"
              />
              <button
                mat-icon-button
                matSuffix
                type="button"
                (click)="hidePassword.set(!hidePassword())"
                [attr.aria-label]="hidePassword() ? 'Show password' : 'Hide password'"
              >
                <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              @if (loginForm.password().touched() && loginForm.password().invalid()) {
                <mat-error>{{ loginForm.password().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <div class="auth-actions">
              <button
                mat-flat-button
                type="submit"
                [disabled]="isSubmitting()"
              >
                @if (isSubmitting()) {
                  <mat-spinner diameter="20" />
                } @else {
                  Sign In
                }
              </button>
            </div>
          </form>
        </mat-card-content>

        <mat-card-actions align="end">
          <a mat-button routerLink="/auth/forgot-password">Forgot password?</a>
          <a mat-button routerLink="/auth/register">Create account</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
    .banner-error {
      display: block;
      margin-bottom: 12px;
      font-size: 14px;
    }
  `,
})
export class LoginComponent {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');
  readonly hidePassword = signal(true);

  readonly loginModel = signal<LoginModel>({ email: '', password: '' });

  readonly loginForm = form(this.loginModel, (s) => {
    validateStandardSchema(s, loginSchema);
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    submit(this.loginForm, async () => {
      this.isSubmitting.set(true);
      try {
        const { email, password } = this.loginModel();
        await this.authStore.login(email, password);
        await this.router.navigate(['/dashboard']);
      } catch (err: unknown) {
        this.errorMessage.set(this.getErrorMessage(err));
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }

  private getErrorMessage(err: unknown): string {
    if (err && typeof err === 'object' && 'code' in err) {
      const code = (err as { code: string }).code;
      if (code === 'auth/invalid-credential') return 'Invalid email or password.';
      if (code === 'auth/too-many-requests') return 'Too many attempts. Please try again later.';
    }
    return 'An unexpected error occurred. Please try again.';
  }
}
