import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-LANZAY3L.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix,
  external_exports,
  form,
  submit,
  validateStandardSchema
} from "./chunk-IDM7ZNXL.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4Z766CXZ.js";
import {
  AuthStore
} from "./chunk-I6VJZWCH.js";
import {
  Component,
  Input,
  Router,
  RouterLink,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// libs/feature-auth/src/lib/reset-password/reset-password.schema.ts
var resetPasswordSchema = external_exports.object({
  password: external_exports.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: external_exports.string().min(1, "Please confirm your password")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

// libs/feature-auth/src/lib/reset-password/reset-password.component.ts
function ResetPasswordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " Invalid or expired reset link. ");
    \u0275\u0275elementStart(5, "a", 5);
    \u0275\u0275text(6, "Request a new one");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". ");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "a", 10);
    \u0275\u0275text(7, "Sign in with new password");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.resetForm.password().errors()[0]) == null ? null : tmp_3_0.message);
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.resetForm.confirmPassword().errors()[0]) == null ? null : tmp_3_0.message);
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Update Password ");
  }
}
function ResetPasswordComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("submit", function ResetPasswordComponent_Conditional_9_Conditional_2_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSubmit($event));
    });
    \u0275\u0275elementStart(1, "mat-form-field", 12)(2, "mat-label");
    \u0275\u0275text(3, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function ResetPasswordComponent_Conditional_9_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hidePassword.set(!ctx_r0.hidePassword()));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-hint");
    \u0275\u0275text(9, "Minimum 8 characters");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_10_Template, 2, 1, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 12)(12, "mat-label");
    \u0275\u0275text(13, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275listener("click", function ResetPasswordComponent_Conditional_9_Conditional_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hideConfirm.set(!ctx_r0.hideConfirm()));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_18_Template, 2, 1, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "button", 15);
    \u0275\u0275conditionalCreate(21, ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_21_Template, 1, 0, "mat-spinner", 16)(22, ResetPasswordComponent_Conditional_9_Conditional_2_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r0.hidePassword() ? "password" : "text");
    \u0275\u0275control(ctx_r0.resetForm.password, "formField");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hidePassword() ? "visibility_off" : "visibility");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.resetForm.password().touched() && ctx_r0.resetForm.password().invalid() ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r0.hideConfirm() ? "password" : "text");
    \u0275\u0275control(ctx_r0.resetForm.confirmPassword, "formField");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hideConfirm() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resetForm.confirmPassword().touched() && ctx_r0.resetForm.confirmPassword().invalid() ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSubmitting() ? 21 : 22);
  }
}
function ResetPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResetPasswordComponent_Conditional_9_Conditional_0_Template, 8, 1);
    \u0275\u0275conditionalCreate(1, ResetPasswordComponent_Conditional_9_Conditional_1_Template, 2, 1, "mat-error", 6);
    \u0275\u0275conditionalCreate(2, ResetPasswordComponent_Conditional_9_Conditional_2_Template, 23, 12, "form", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.successMessage() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMessage() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.successMessage() ? 2 : -1);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  authStore = inject(AuthStore);
  router = inject(Router);
  /** Query param injected from the Firebase password-reset email link (?oobCode=...) */
  oobCode = input("", ...ngDevMode ? [{ debugName: "oobCode" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  hidePassword = signal(true, ...ngDevMode ? [{ debugName: "hidePassword" }] : []);
  hideConfirm = signal(true, ...ngDevMode ? [{ debugName: "hideConfirm" }] : []);
  resetModel = signal({ password: "", confirmPassword: "" }, ...ngDevMode ? [{ debugName: "resetModel" }] : []);
  resetForm = form(this.resetModel, (s) => {
    validateStandardSchema(s, resetPasswordSchema);
  });
  onSubmit(event) {
    event.preventDefault();
    this.errorMessage.set("");
    submit(this.resetForm, async () => {
      this.isSubmitting.set(true);
      try {
        await this.authStore.resetPassword(this.oobCode(), this.resetModel().password);
        this.successMessage.set("Password updated successfully.");
        setTimeout(() => this.router.navigate(["/auth/login"]), 2e3);
      } catch {
        this.errorMessage.set("Failed to reset password. The link may have expired.");
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["lib-reset-password"]], inputs: { oobCode: [1, "oobCode"] }, decls: 15, vars: 1, consts: [[1, "auth-page"], [1, "auth-card"], [1, "banner-error-block"], ["align", "end"], ["mat-button", "", "routerLink", "/auth/login"], ["routerLink", "/auth/forgot-password"], [1, "banner-error"], [1, "auth-form"], [1, "banner-success"], [1, "auth-actions"], ["mat-flat-button", "", "routerLink", "/auth/login"], [1, "auth-form", 3, "submit"], ["appearance", "outline"], ["matInput", "", "autocomplete", "new-password", 3, "type", "formField"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], ["diameter", "20"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Set New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Choose a strong password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content");
      \u0275\u0275conditionalCreate(8, ResetPasswordComponent_Conditional_8_Template, 8, 0, "div", 2)(9, ResetPasswordComponent_Conditional_9_Template, 3, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-card-actions", 3)(11, "a", 4)(12, "mat-icon");
      \u0275\u0275text(13, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Back to Sign In ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.oobCode() ? 8 : 9);
    }
  }, dependencies: [
    FormField,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.banner-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.banner-error-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: #fce4ec;\n  color: #c62828;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.banner-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "lib-reset-password", standalone: true, imports: [
      FormField,
      RouterLink,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `
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
  `, styles: ["/* angular:styles/component:scss;7b5532922371055ec2624ba2e4409b6ce7572d29762d4d1bacb8149250cadc42;c:/Users/fwille/Desktop/art-work/libs/feature-auth/src/lib/reset-password/reset-password.component.ts */\n.banner-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.banner-error-block {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: #fce4ec;\n  color: #c62828;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.banner-error {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n"] }]
  }], null, { oobCode: [{ type: Input, args: [{ isSignal: true, alias: "oobCode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "libs/feature-auth/src/lib/reset-password/reset-password.component.ts", lineNumber: 148 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-DF5CWKOI.js.map
