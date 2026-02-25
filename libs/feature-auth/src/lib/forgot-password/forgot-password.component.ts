import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, FormField, submit, validateStandardSchema } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthStore } from '@art-work/core';
import { forgotPasswordSchema, ForgotPasswordModel } from './forgot-password.schema';

@Component({
  selector: 'lib-forgot-password',
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
          <mat-card-title>Reset Password</mat-card-title>
          <mat-card-subtitle>We'll send you a reset link</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          @if (successMessage()) {
            <div class="banner-success">
              <mat-icon>check_circle</mat-icon>
              <span>{{ successMessage() }}</span>
            </div>
          }

          @if (errorMessage()) {
            <mat-error class="banner-error">{{ errorMessage() }}</mat-error>
          }

          @if (!successMessage()) {
            <form class="auth-form" (submit)="onSubmit($event)">
              <mat-form-field appearance="outline">
                <mat-label>Email Address</mat-label>
                <input matInput type="email" [formField]="forgotForm.email" autocomplete="email" />
                <mat-icon matSuffix>email</mat-icon>
                @if (forgotForm.email().touched() && forgotForm.email().invalid()) {
                  <mat-error>{{ forgotForm.email().errors()[0]?.message }}</mat-error>
                }
              </mat-form-field>

              <div class="auth-actions">
                <button mat-flat-button type="submit" [disabled]="isSubmitting()">
                  @if (isSubmitting()) {
                    <mat-spinner diameter="20" />
                  } @else {
                    Send Reset Link
                  }
                </button>
              </div>
            </form>
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

    .banner-error {
      display: block;
      margin-bottom: 12px;
      font-size: 14px;
    }
  `,
})
export class ForgotPasswordComponent {
  private readonly authStore = inject(AuthStore);

  readonly isSubmitting = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');

  readonly forgotModel = signal<ForgotPasswordModel>({ email: '' });

  readonly forgotForm = form(this.forgotModel, (s) => {
    validateStandardSchema(s, forgotPasswordSchema);
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    submit(this.forgotForm, async () => {
      this.isSubmitting.set(true);
      try {
        await this.authStore.forgotPassword(this.forgotModel().email);
        this.successMessage.set('Password reset email sent. Please check your inbox.');
      } catch {
        this.errorMessage.set('Failed to send reset email. Please try again.');
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }
}
