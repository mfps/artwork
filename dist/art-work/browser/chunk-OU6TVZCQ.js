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
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// libs/feature-auth/src/lib/login/login.schema.ts
var loginSchema = external_exports.object({
  email: external_exports.string().min(1, "Email is required").email("Enter a valid email address"),
  password: external_exports.string().min(1, "Password is required")
});

// libs/feature-auth/src/lib/login/login.component.ts
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.loginForm.email().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function LoginComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.loginForm.password().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 11);
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var LoginComponent = class _LoginComponent {
  authStore = inject(AuthStore);
  router = inject(Router);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  hidePassword = signal(true, ...ngDevMode ? [{ debugName: "hidePassword" }] : []);
  loginModel = signal({ email: "", password: "" }, ...ngDevMode ? [{ debugName: "loginModel" }] : []);
  loginForm = form(this.loginModel, (s) => {
    validateStandardSchema(s, loginSchema);
  });
  onSubmit(event) {
    event.preventDefault();
    this.errorMessage.set("");
    submit(this.loginForm, async () => {
      this.isSubmitting.set(true);
      try {
        const { email, password } = this.loginModel();
        await this.authStore.login(email, password);
        await this.router.navigate(["/dashboard"]);
      } catch (err) {
        this.errorMessage.set(this.getErrorMessage(err));
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }
  getErrorMessage(err) {
    if (err && typeof err === "object" && "code" in err) {
      const code = err.code;
      if (code === "auth/invalid-credential")
        return "Invalid email or password.";
      if (code === "auth/too-many-requests")
        return "Too many attempts. Please try again later.";
    }
    return "An unexpected error occurred. Please try again.";
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["lib-login"]], decls: 34, vars: 12, consts: [[1, "auth-page"], [1, "auth-card"], [1, "banner-error"], [1, "auth-form", 3, "submit"], ["appearance", "outline"], ["matInput", "", "type", "email", "autocomplete", "email", 3, "formField"], ["matSuffix", ""], ["matInput", "", "autocomplete", "current-password", 3, "type", "formField"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "auth-actions"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], ["diameter", "20"], ["align", "end"], ["mat-button", "", "routerLink", "/auth/forgot-password"], ["mat-button", "", "routerLink", "/auth/register"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Welcome back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content");
      \u0275\u0275conditionalCreate(8, LoginComponent_Conditional_8_Template, 2, 1, "mat-error", 2);
      \u0275\u0275elementStart(9, "form", 3);
      \u0275\u0275listener("submit", function LoginComponent_Template_form_submit_9_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(10, "mat-form-field", 4)(11, "mat-label");
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 5);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(14, "mat-icon", 6);
      \u0275\u0275text(15, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, LoginComponent_Conditional_16_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 4)(18, "mat-label");
      \u0275\u0275text(19, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(21, "button", 8);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_21_listener() {
        return ctx.hidePassword.set(!ctx.hidePassword());
      });
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(24, LoginComponent_Conditional_24_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 9)(26, "button", 10);
      \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_27_Template, 1, 0, "mat-spinner", 11)(28, LoginComponent_Conditional_28_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "mat-card-actions", 12)(30, "a", 13);
      \u0275\u0275text(31, "Forgot password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 14);
      \u0275\u0275text(33, "Create account");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.errorMessage() ? 8 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275control(ctx.loginForm.email, "formField");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loginForm.email().touched() && ctx.loginForm.email().invalid() ? 16 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
      \u0275\u0275control(ctx.loginForm.password, "formField");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.hidePassword() ? "Show password" : "Hide password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loginForm.password().touched() && ctx.loginForm.password().invalid() ? 24 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 27 : 28);
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
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.banner-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "lib-login", standalone: true, imports: [
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
  `, styles: ["/* angular:styles/component:scss;892a2d18102db02a2533723349075b6c5a7669c8851cc58cb74ed81391bf7a2d;c:/Users/fwille/Desktop/art-work/libs/feature-auth/src/lib/login/login.component.ts */\n.banner-error {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "libs/feature-auth/src/lib/login/login.component.ts", lineNumber: 107 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-OU6TVZCQ.js.map
