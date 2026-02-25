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
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4Z766CXZ.js";
import {
  AuthStore
} from "./chunk-I6VJZWCH.js";
import {
  Component,
  RouterLink,
  inject,
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

// libs/feature-auth/src/lib/forgot-password/forgot-password.schema.ts
var forgotPasswordSchema = external_exports.object({
  email: external_exports.string().min(1, "Email is required").email("Enter a valid email address")
});

// libs/feature-auth/src/lib/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function ForgotPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ForgotPasswordComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.forgotForm.email().errors()[0]) == null ? null : tmp_2_0.message);
  }
}
function ForgotPasswordComponent_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function ForgotPasswordComponent_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Send Reset Link ");
  }
}
function ForgotPasswordComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("submit", function ForgotPasswordComponent_Conditional_10_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit($event));
    });
    \u0275\u0275elementStart(1, "mat-form-field", 8)(2, "mat-label");
    \u0275\u0275text(3, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "mat-icon", 10);
    \u0275\u0275text(6, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ForgotPasswordComponent_Conditional_10_Conditional_7_Template, 2, 1, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "button", 12);
    \u0275\u0275conditionalCreate(10, ForgotPasswordComponent_Conditional_10_Conditional_10_Template, 1, 0, "mat-spinner", 13)(11, ForgotPasswordComponent_Conditional_10_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275control(ctx_r0.forgotForm.email, "formField");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.forgotForm.email().touched() && ctx_r0.forgotForm.email().invalid() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSubmitting() ? 10 : 11);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  authStore = inject(AuthStore);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  forgotModel = signal({ email: "" }, ...ngDevMode ? [{ debugName: "forgotModel" }] : []);
  forgotForm = form(this.forgotModel, (s) => {
    validateStandardSchema(s, forgotPasswordSchema);
  });
  onSubmit(event) {
    event.preventDefault();
    this.errorMessage.set("");
    submit(this.forgotForm, async () => {
      this.isSubmitting.set(true);
      try {
        await this.authStore.forgotPassword(this.forgotModel().email);
        this.successMessage.set("Password reset email sent. Please check your inbox.");
      } catch {
        this.errorMessage.set("Failed to send reset email. Please try again.");
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["lib-forgot-password"]], decls: 16, vars: 3, consts: [[1, "auth-page"], [1, "auth-card"], [1, "banner-success"], [1, "banner-error"], [1, "auth-form"], ["align", "end"], ["mat-button", "", "routerLink", "/auth/login"], [1, "auth-form", 3, "submit"], ["appearance", "outline"], ["matInput", "", "type", "email", "autocomplete", "email", 3, "formField"], ["matSuffix", ""], [1, "auth-actions"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], ["diameter", "20"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "We'll send you a reset link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content");
      \u0275\u0275conditionalCreate(8, ForgotPasswordComponent_Conditional_8_Template, 5, 1, "div", 2);
      \u0275\u0275conditionalCreate(9, ForgotPasswordComponent_Conditional_9_Template, 2, 1, "mat-error", 3);
      \u0275\u0275conditionalCreate(10, ForgotPasswordComponent_Conditional_10_Template, 12, 5, "form", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-card-actions", 5)(12, "a", 6)(13, "mat-icon");
      \u0275\u0275text(14, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Back to Sign In ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.successMessage() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.successMessage() ? 10 : -1);
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
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.banner-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.banner-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "lib-forgot-password", standalone: true, imports: [
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
  `, styles: ["/* angular:styles/component:scss;6a3d64ead9b51f5296695ddaf75596e73b260e931b17c3863066452e87b538f1;c:/Users/fwille/Desktop/art-work/libs/feature-auth/src/lib/forgot-password/forgot-password.component.ts */\n.banner-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.banner-error {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "libs/feature-auth/src/lib/forgot-password/forgot-password.component.ts", lineNumber: 99 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-HSGBIBO4.js.map
