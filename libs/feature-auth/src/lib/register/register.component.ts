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
import { registerSchema, RegisterModel } from './register.schema';

@Component({
  selector: 'lib-register',
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
          <mat-card-title>Create Account</mat-card-title>
          <mat-card-subtitle>Join us today</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          @if (errorMessage()) {
            <mat-error class="banner-error">{{ errorMessage() }}</mat-error>
          }

          <form class="auth-form" (submit)="onSubmit($event)">
            <div class="field-row">
              <mat-form-field appearance="outline">
                <mat-label>First Name</mat-label>
                <input matInput type="text" [formField]="registerForm.firstName" autocomplete="given-name" />
                @if (registerForm.firstName().touched() && registerForm.firstName().invalid()) {
                  <mat-error>{{ registerForm.firstName().errors()[0]?.message }}</mat-error>
                }
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Last Name</mat-label>
                <input matInput type="text" [formField]="registerForm.lastName" autocomplete="family-name" />
                @if (registerForm.lastName().touched() && registerForm.lastName().invalid()) {
                  <mat-error>{{ registerForm.lastName().errors()[0]?.message }}</mat-error>
                }
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline">
              <mat-label>Display Name</mat-label>
              <input matInput type="text" [formField]="registerForm.displayName" autocomplete="nickname" />
              <mat-hint>2–30 characters, shown publicly</mat-hint>
              @if (registerForm.displayName().touched() && registerForm.displayName().invalid()) {
                <mat-error>{{ registerForm.displayName().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Age</mat-label>
              <input matInput type="number" [formField]="registerForm.age" />
              @if (registerForm.age().touched() && registerForm.age().invalid()) {
                <mat-error>{{ registerForm.age().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput type="email" [formField]="registerForm.email" autocomplete="email" />
              <mat-icon matSuffix>email</mat-icon>
              @if (registerForm.email().touched() && registerForm.email().invalid()) {
                <mat-error>{{ registerForm.email().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input
                matInput
                [type]="hidePassword() ? 'password' : 'text'"
                [formField]="registerForm.password"
                autocomplete="new-password"
              />
              <button mat-icon-button matSuffix type="button" (click)="hidePassword.set(!hidePassword())">
                <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              <mat-hint>Minimum 8 characters</mat-hint>
              @if (registerForm.password().touched() && registerForm.password().invalid()) {
                <mat-error>{{ registerForm.password().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Confirm Password</mat-label>
              <input
                matInput
                [type]="hideConfirm() ? 'password' : 'text'"
                [formField]="registerForm.confirmPassword"
                autocomplete="new-password"
              />
              <button mat-icon-button matSuffix type="button" (click)="hideConfirm.set(!hideConfirm())">
                <mat-icon>{{ hideConfirm() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              @if (registerForm.confirmPassword().touched() && registerForm.confirmPassword().invalid()) {
                <mat-error>{{ registerForm.confirmPassword().errors()[0]?.message }}</mat-error>
              }
            </mat-form-field>

            <div class="auth-actions">
              <button mat-flat-button type="submit" [disabled]="isSubmitting()">
                @if (isSubmitting()) {
                  <mat-spinner diameter="20" />
                } @else {
                  Create Account
                }
              </button>
            </div>
          </form>
        </mat-card-content>

        <mat-card-actions align="end">
          <a mat-button routerLink="/auth/login">Already have an account?</a>
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
export class RegisterComponent {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');
  readonly hidePassword = signal(true);
  readonly hideConfirm = signal(true);

  readonly registerModel = signal<RegisterModel>({
    firstName: '',
    lastName: '',
    displayName: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
  });

  readonly registerForm = form(this.registerModel, (s) => {
    validateStandardSchema(s, registerSchema);
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    submit(this.registerForm, async () => {
      this.isSubmitting.set(true);
      try {
        const model = this.registerModel();
        await this.authStore.register({
          email: model.email,
          password: model.password,
          firstName: model.firstName,
          lastName: model.lastName,
          displayName: model.displayName,
          age: model.age,
        });
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
      if (code === 'auth/email-already-in-use') return 'An account with this email already exists.';
      if (code === 'auth/weak-password') return 'Password is too weak.';
    }
    return 'An unexpected error occurred. Please try again.';
  }
}
