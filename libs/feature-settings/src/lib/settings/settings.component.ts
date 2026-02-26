import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { form, FormField, submit, validateStandardSchema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthStore } from '@art-work/core';
import { AppSidebarComponent } from '@art-work/ui';
import { profileSchema, ProfileFormModel } from './settings.schema';

type SettingsTab = 'profile' | 'notifications' | 'security' | 'billing';

@Component({
  selector: 'lib-settings',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormField,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    AppSidebarComponent,
  ],
  template: `
    <div class="page">
      <lib-app-sidebar />

      <main class="main">
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <h1 class="page-title">Settings</h1>
            <p class="page-sub">Manage your account and preferences</p>
          </div>
        </div>

        <!-- Tabs -->
        <div class="tabs">
          @for (tab of tabs; track tab.key) {
            <button
              class="tab-btn"
              [class.tab-btn--active]="activeTab() === tab.key"
              (click)="activeTab.set(tab.key)"
            >
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Tab: Profile -->
        @if (activeTab() === 'profile') {
          <div class="content-area">

            <!-- Profile card -->
            <div class="card profile-card">
              <div class="avatar-wrap">
                <div class="avatar">
                  <mat-icon class="avatar-icon">person</mat-icon>
                </div>
              </div>
              <div class="profile-info">
                <span class="profile-name">{{ authStore.currentUser()?.displayName ?? 'Your Name' }}</span>
                <span class="profile-email">{{ authStore.currentUser()?.email ?? '' }}</span>
                <span class="profile-since">Member since 2024</span>
              </div>
              <button mat-stroked-button class="edit-profile-btn">
                <mat-icon>edit</mat-icon>
                Edit Profile
              </button>
            </div>

            <!-- Personal info form -->
            <div class="card">
              <div class="card-header">
                <h2 class="card-title">Personal Information</h2>
                <p class="card-sub">Update your personal details and public profile</p>
              </div>
              <div class="divider"></div>
              <form class="profile-form" (submit)="onSaveProfile($event)">
                <div class="field-row">
                  <mat-form-field appearance="outline">
                    <mat-label>First Name</mat-label>
                    <input matInput [formField]="profileForm.firstName" />
                    @if (profileForm.firstName().touched() && profileForm.firstName().invalid()) {
                      <mat-error>{{ profileForm.firstName().errors()[0]?.message }}</mat-error>
                    }
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Last Name</mat-label>
                    <input matInput [formField]="profileForm.lastName" />
                    @if (profileForm.lastName().touched() && profileForm.lastName().invalid()) {
                      <mat-error>{{ profileForm.lastName().errors()[0]?.message }}</mat-error>
                    }
                  </mat-form-field>
                </div>

                <div class="field-row">
                  <mat-form-field appearance="outline">
                    <mat-label>Email</mat-label>
                    <input matInput type="email" [formField]="profileForm.email" />
                    @if (profileForm.email().touched() && profileForm.email().invalid()) {
                      <mat-error>{{ profileForm.email().errors()[0]?.message }}</mat-error>
                    }
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Phone</mat-label>
                    <input matInput type="tel" [formField]="profileForm.phone" />
                  </mat-form-field>
                </div>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Bio</mat-label>
                  <textarea matInput rows="3" [formField]="profileForm.bio"></textarea>
                </mat-form-field>

                <div class="form-actions">
                  <button mat-stroked-button type="button" (click)="onCancelProfile()">
                    Cancel
                  </button>
                  <button mat-flat-button type="submit" class="save-btn" [disabled]="isSaving()">
                    Save Changes
                  </button>
                </div>

                @if (errorMessage()) {
                  <mat-error class="form-error">{{ errorMessage() }}</mat-error>
                }
              </form>
            </div>

            <!-- Preferences -->
            <div class="card">
              <div class="card-header">
                <h2 class="card-title">Preferences</h2>
                <p class="card-sub">Configure your workspace and notification settings</p>
              </div>
              <div class="divider"></div>
              <div class="pref-row">
                <div class="pref-info">
                  <span class="pref-label">Email Notifications</span>
                  <span class="pref-sub">Receive emails about sales and activity</span>
                </div>
                <mat-slide-toggle
                  [checked]="prefEmailNotifications()"
                  (change)="prefEmailNotifications.set($event.checked)"
                />
              </div>
              <div class="divider"></div>
              <div class="pref-row">
                <div class="pref-info">
                  <span class="pref-label">Dark Mode</span>
                  <span class="pref-sub">Use dark color scheme across the app</span>
                </div>
                <mat-slide-toggle
                  [checked]="prefDarkMode()"
                  (change)="prefDarkMode.set($event.checked)"
                />
              </div>
              <div class="divider"></div>
              <div class="pref-row">
                <div class="pref-info">
                  <span class="pref-label">Public Profile</span>
                  <span class="pref-sub">Show your profile to other artists</span>
                </div>
                <mat-slide-toggle
                  [checked]="prefPublicProfile()"
                  (change)="prefPublicProfile.set($event.checked)"
                />
              </div>
              <div class="divider"></div>
              <div class="pref-row">
                <div class="pref-info">
                  <span class="pref-label">Analytics</span>
                  <span class="pref-sub">Share anonymous usage data to improve the app</span>
                </div>
                <mat-slide-toggle
                  [checked]="prefAnalytics()"
                  (change)="prefAnalytics.set($event.checked)"
                />
              </div>
            </div>

            <!-- Danger zone -->
            <div class="card card--danger">
              <div class="danger-info">
                <span class="danger-title">Delete Account</span>
                <span class="danger-sub">Permanently delete your account and all data. This cannot be undone.</span>
              </div>
              <button mat-flat-button class="delete-btn" (click)="onDeleteAccount()">
                Delete Account
              </button>
            </div>

          </div>
        }

        <!-- Tab: Notifications (placeholder) -->
        @if (activeTab() === 'notifications') {
          <div class="content-area">
            <div class="card placeholder-card">
              <mat-icon class="placeholder-icon">notifications_none</mat-icon>
              <span class="placeholder-text">Notification settings coming soon</span>
            </div>
          </div>
        }

        <!-- Tab: Security (placeholder) -->
        @if (activeTab() === 'security') {
          <div class="content-area">
            <div class="card placeholder-card">
              <mat-icon class="placeholder-icon">lock_outline</mat-icon>
              <span class="placeholder-text">Security settings coming soon</span>
            </div>
          </div>
        }

        <!-- Tab: Billing (placeholder) -->
        @if (activeTab() === 'billing') {
          <div class="content-area">
            <div class="card placeholder-card">
              <mat-icon class="placeholder-icon">credit_card</mat-icon>
              <span class="placeholder-text">Billing settings coming soon</span>
            </div>
          </div>
        }
      </main>
    </div>
  `,
  styles: `
    .page {
      display: flex;
      height: 100vh;
      overflow: hidden;
      background: var(--bg-page);
    }

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 32px 40px;
      gap: 24px;
      overflow-y: auto;
    }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .page-title {
      margin: 0;
      font-family: 'Newsreader', serif;
      font-size: 28px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .page-sub {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: var(--text-secondary);
    }

    /* Tabs */
    .tabs {
      display: flex;
      border-bottom: 1px solid var(--border-primary);
      gap: 0;
    }
    .tab-btn {
      padding: 12px 20px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-muted);
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: color 0.15s, border-color 0.15s;
      margin-bottom: -1px;
    }
    .tab-btn--active {
      color: var(--text-primary);
      border-bottom-color: var(--accent-teal);
      font-weight: 600;
    }
    .tab-btn:hover:not(.tab-btn--active) {
      color: var(--text-secondary);
    }

    /* Content */
    .content-area {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* Cards */
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .card--danger {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-color: #e5c5c5;
      gap: 24px;
    }

    /* Profile card */
    .profile-card {
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
    .avatar-wrap {
      flex-shrink: 0;
    }
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background: var(--bg-page);
      border: 1px solid var(--border-primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .avatar-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--text-muted);
    }
    .profile-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .profile-name {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .profile-email {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .profile-since {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: var(--text-tertiary);
    }
    .edit-profile-btn {
      flex-shrink: 0;
    }

    /* Card header */
    .card-header {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .card-title {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .card-sub {
      margin: 0;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-secondary);
    }

    .divider {
      height: 1px;
      background: var(--border-divider, var(--border-primary));
      margin: 0 -24px;
    }

    /* Form */
    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .field-row {
      display: flex;
      gap: 20px;
    }
    .field-row mat-form-field {
      flex: 1;
    }
    .full-width {
      width: 100%;
    }
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      padding-top: 4px;
    }
    .save-btn {
      background: var(--accent-teal) !important;
      color: #ffffff !important;
    }
    .form-error {
      display: block;
      margin-top: 8px;
      font-size: 13px;
    }

    /* Preferences */
    .pref-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .pref-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .pref-label {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .pref-sub {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: var(--text-secondary);
    }

    /* Danger zone */
    .danger-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .danger-title {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .danger-sub {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: var(--text-secondary);
    }
    .delete-btn {
      background: #c45050 !important;
      color: #ffffff !important;
      border-radius: 8px !important;
      flex-shrink: 0;
    }

    /* Placeholder tab content */
    .placeholder-card {
      align-items: center;
      justify-content: center;
      padding: 64px;
      gap: 16px;
    }
    .placeholder-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--text-muted);
    }
    .placeholder-text {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: var(--text-tertiary);
    }
  `,
})
export class SettingsComponent {
  protected readonly authStore = inject(AuthStore);

  readonly activeTab = signal<SettingsTab>('profile');

  readonly tabs: { key: SettingsTab; label: string }[] = [
    { key: 'profile', label: 'Profile' },
    { key: 'notifications', label: 'Notifications' },
    { key: 'security', label: 'Security' },
    { key: 'billing', label: 'Billing' },
  ];

  // Preference toggles
  readonly prefEmailNotifications = signal(true);
  readonly prefDarkMode = signal(false);
  readonly prefPublicProfile = signal(true);
  readonly prefAnalytics = signal(false);

  // Profile form
  readonly isSaving = signal(false);
  readonly errorMessage = signal('');

  readonly profileModel = signal<ProfileFormModel>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
  });

  readonly profileForm = form(this.profileModel, (s) => {
    validateStandardSchema(s, profileSchema);
  });

  constructor() {
    effect(() => {
      const email = this.authStore.currentUser()?.email;
      const displayName = this.authStore.currentUser()?.displayName ?? '';
      const [firstName = '', ...rest] = displayName.split(' ');
      const lastName = rest.join(' ');
      this.profileModel.set({
        firstName,
        lastName,
        email: email ?? '',
        phone: '',
        bio: '',
      });
    });
  }

  onSaveProfile(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    submit(this.profileForm, async () => {
      this.isSaving.set(true);
      try {
        // TODO: persist profile via UserService
      } catch (err) {
        this.errorMessage.set(
          err instanceof Error ? err.message : 'Failed to save',
        );
      } finally {
        this.isSaving.set(false);
      }
    });
  }

  onCancelProfile(): void {
    const currentUser = this.authStore.currentUser();
    if (!currentUser) return;
    const email = currentUser.email;
    const displayName = currentUser.displayName ?? '';
    const [firstName = '', ...rest] = displayName.split(' ');
    this.profileModel.set({
      firstName,
      lastName: rest.join(' '),
      email: email ?? '',
      phone: '',
      bio: '',
    });
  }

  onDeleteAccount(): void {
    // TODO: confirm dialog then delete account via AuthService
  }
}
