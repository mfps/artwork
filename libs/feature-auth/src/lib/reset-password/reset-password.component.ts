import { Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { form, FormField, submit, validateStandardSchema } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthStore } from '@art-work/core';
import { resetPasswordSchema, ResetPasswordModel } from './reset-password.schema';

@Component({
  selector: 'lib-reset-password',
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
          <mat-card-title>Set New Password</mat-card-title>
          <mat-card-subtitle>Choose a strong password</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          @if (!oobCode()) {
            <div class="banner-error-block">
              <mat-icon>error_outline</mat-icon>
              <span>
                Invalid or expired reset link.
                <a routerLink="/auth/forgot-password">Request a new one</a>.
              </span>
            </div>
          } @else {
            @if (successMessage()) {
              <div class="banner-success">
                <mat-icon>check_circle</mat-icon>
                <span>{{ successMessage() }}</span>
              </div>
              <div class="auth-actions">
                <a mat-flat-button routerLink="/auth/login">Sign in with new password</a>
              </div>
            }

            @if (errorMessage()) {
              <mat-error class="banner-error">{{ errorMessage() }}</mat-error>
            }

            @if (!successMessage()) {
              <form class="auth-form" (submit)="onSubmit($event)">
                <mat-form-field appearance="outline">
                  <mat-label>New Password</mat-label>
                  <input
                    matInput
                    [type]="hidePassword() ? 'password' : 'text'"
                    [formField]="resetForm.password"
                    autocomplete="new-password"
                  />
                  <button mat-icon-button matSuffix type="button" (click)="hidePassword.set(!hidePassword())">
                    <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
                  </button>
                  <mat-hint>Minimum 8 characters</mat-hint>
                  @if (resetForm.password().touched() && resetForm.password().invalid()) {
                    <mat-error>{{ resetForm.password().errors()[0]?.message }}</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Confirm New Password</mat-label>
                  <input
                    matInput
                    [type]="hideConfirm() ? 'password' : 'text'"
                    [formField]="resetForm.confirmPassword"
                    autocomplete="new-password"
                  />
                  <button mat-icon-button matSuffix type="button" (click)="hideConfirm.set(!hideConfirm())">
                    <mat-icon>{{ hideConfirm() ? 'visibility_off' : 'visibility' }}</mat-icon>
                  </button>
                  @if (resetForm.confirmPassword().touched() && resetForm.confirmPassword().invalid()) {
                    <mat-error>{{ resetForm.confirmPassword().errors()[0]?.message }}</mat-error>
                  }
                </mat-form-field>

                <div class="auth-actions">
                  <button mat-flat-button type="submit" [disabled]="isSubmitting()">
                    @if (isSubmitting()) {
                      <mat-spinner diameter="20" />
                    } @else {
                      Update Password
                    }
                  </button>
                </div>
              </form>
            }
          }
        </mat-card-content>

        <mat-card-actions align="end">
          <a mat-button routerLink="/auth/login">
            <mat-icon>arrow_back</mat-icon>
            Back to Sign In
          </a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
    .banner-success {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-radius: 4px;
      background-color: #e8f5e9;
      color: #2e7d32;
      margin-bottom: 16px;
      font-size: 14px;
    }

    .banner-error-block {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-radius: 4px;
      background-color: #fce4ec;
      color: #c62828;
      margin-bottom: 16px;
      font-size: 14px;
    }

    .banner-error {
      display: block;
      margin-bottom: 12px;
      font-size: 14px;
    }
  `,
})
export class ResetPasswordComponent {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  /** Query param injected from the Firebase password-reset email link (?oobCode=...) */
  readonly oobCode = input<string>('');

  readonly isSubmitting = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');
  readonly hidePassword = signal(true);
  readonly hideConfirm = signal(true);

  readonly resetModel = signal<ResetPasswordModel>({ password: '', confirmPassword: '' });

  readonly resetForm = form(this.resetModel, (s) => {
    validateStandardSchema(s, resetPasswordSchema);
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    submit(this.resetForm, async () => {
      this.isSubmitting.set(true);
      try {
        await this.authStore.resetPassword(this.oobCode(), this.resetModel().password);
        this.successMessage.set('Password updated successfully.');
        setTimeout(() => this.router.navigate(['/auth/login']), 2000);
      } catch {
        this.errorMessage.set('Failed to reset password. The link may have expired.');
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }
}
