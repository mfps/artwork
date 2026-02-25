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
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YLHD6LJW.js";
import "./chunk-653SOEEV.js";

// libs/feature-auth/src/lib/register/register.schema.ts
var registerSchema = external_exports.object({
  firstName: external_exports.string().min(1, "First name is required"),
  lastName: external_exports.string().min(1, "Last name is required"),
  displayName: external_exports.string().min(2, "Display name must be at least 2 characters").max(30, "Display name cannot exceed 30 characters"),
  age: external_exports.number({ message: "Age is required" }).min(13, "Must be at least 13 years old"),
  email: external_exports.string().min(1, "Email is required").email("Enter a valid email address"),
  password: external_exports.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: external_exports.string().min(1, "Please confirm your password")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

// libs/feature-auth/src/lib/register/register.component.ts
function RegisterComponent_Conditional_8_Template(rf, ctx) {
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
function RegisterComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.firstName().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.lastName().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.displayName().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.age().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.email().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.password().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.registerForm.confirmPassword().errors()[0]) == null ? null : tmp_1_0.message);
  }
}
function RegisterComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function RegisterComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Account ");
  }
}
var RegisterComponent = class _RegisterComponent {
  authStore = inject(AuthStore);
  router = inject(Router);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  hidePassword = signal(true, ...ngDevMode ? [{ debugName: "hidePassword" }] : []);
  hideConfirm = signal(true, ...ngDevMode ? [{ debugName: "hideConfirm" }] : []);
  registerModel = signal({
    firstName: "",
    lastName: "",
    displayName: "",
    age: 0,
    email: "",
    password: "",
    confirmPassword: ""
  }, ...ngDevMode ? [{ debugName: "registerModel" }] : []);
  registerForm = form(this.registerModel, (s) => {
    validateStandardSchema(s, registerSchema);
  });
  onSubmit(event) {
    event.preventDefault();
    this.errorMessage.set("");
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
          age: model.age
        });
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
      if (code === "auth/email-already-in-use")
        return "An account with this email already exists.";
      if (code === "auth/weak-password")
        return "Password is too weak.";
    }
    return "An unexpected error occurred. Please try again.";
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["lib-register"]], decls: 65, vars: 28, consts: [[1, "auth-page"], [1, "auth-card"], [1, "banner-error"], [1, "auth-form", 3, "submit"], [1, "field-row"], ["appearance", "outline"], ["matInput", "", "type", "text", "autocomplete", "given-name", 3, "formField"], ["matInput", "", "type", "text", "autocomplete", "family-name", 3, "formField"], ["matInput", "", "type", "text", "autocomplete", "nickname", 3, "formField"], ["matInput", "", "type", "number", 3, "formField"], ["matInput", "", "type", "email", "autocomplete", "email", 3, "formField"], ["matSuffix", ""], ["matInput", "", "autocomplete", "new-password", 3, "type", "formField"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "auth-actions"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], ["diameter", "20"], ["align", "end"], ["mat-button", "", "routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
      \u0275\u0275text(4, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-card-subtitle");
      \u0275\u0275text(6, "Join us today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-card-content");
      \u0275\u0275conditionalCreate(8, RegisterComponent_Conditional_8_Template, 2, 1, "mat-error", 2);
      \u0275\u0275elementStart(9, "form", 3);
      \u0275\u0275listener("submit", function RegisterComponent_Template_form_submit_9_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(10, "div", 4)(11, "mat-form-field", 5)(12, "mat-label");
      \u0275\u0275text(13, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(15, RegisterComponent_Conditional_15_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-form-field", 5)(17, "mat-label");
      \u0275\u0275text(18, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(20, RegisterComponent_Conditional_20_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "mat-form-field", 5)(22, "mat-label");
      \u0275\u0275text(23, "Display Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(25, "mat-hint");
      \u0275\u0275text(26, "2\u201330 characters, shown publicly");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, RegisterComponent_Conditional_27_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-form-field", 5)(29, "mat-label");
      \u0275\u0275text(30, "Age");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(32, RegisterComponent_Conditional_32_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-form-field", 5)(34, "mat-label");
      \u0275\u0275text(35, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(37, "mat-icon", 11);
      \u0275\u0275text(38, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, RegisterComponent_Conditional_39_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "mat-form-field", 5)(41, "mat-label");
      \u0275\u0275text(42, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(44, "button", 13);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_44_listener() {
        return ctx.hidePassword.set(!ctx.hidePassword());
      });
      \u0275\u0275elementStart(45, "mat-icon");
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "mat-hint");
      \u0275\u0275text(48, "Minimum 8 characters");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(49, RegisterComponent_Conditional_49_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-form-field", 5)(51, "mat-label");
      \u0275\u0275text(52, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(54, "button", 13);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_54_listener() {
        return ctx.hideConfirm.set(!ctx.hideConfirm());
      });
      \u0275\u0275elementStart(55, "mat-icon");
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(57, RegisterComponent_Conditional_57_Template, 2, 1, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 14)(59, "button", 15);
      \u0275\u0275conditionalCreate(60, RegisterComponent_Conditional_60_Template, 1, 0, "mat-spinner", 16)(61, RegisterComponent_Conditional_61_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "mat-card-actions", 17)(63, "a", 18);
      \u0275\u0275text(64, "Already have an account?");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.errorMessage() ? 8 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275control(ctx.registerForm.firstName, "formField");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.firstName().touched() && ctx.registerForm.firstName().invalid() ? 15 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control(ctx.registerForm.lastName, "formField");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.lastName().touched() && ctx.registerForm.lastName().invalid() ? 20 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control(ctx.registerForm.displayName, "formField");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.registerForm.displayName().touched() && ctx.registerForm.displayName().invalid() ? 27 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control(ctx.registerForm.age, "formField");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.age().touched() && ctx.registerForm.age().invalid() ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control(ctx.registerForm.email, "formField");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.registerForm.email().touched() && ctx.registerForm.email().invalid() ? 39 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
      \u0275\u0275control(ctx.registerForm.password, "formField");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.registerForm.password().touched() && ctx.registerForm.password().invalid() ? 49 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hideConfirm() ? "password" : "text");
      \u0275\u0275control(ctx.registerForm.confirmPassword, "formField");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hideConfirm() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.confirmPassword().touched() && ctx.registerForm.confirmPassword().invalid() ? 57 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 60 : 61);
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
  ], styles: ["\n\n.banner-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "lib-register", standalone: true, imports: [
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
              <mat-hint>2\u201330 characters, shown publicly</mat-hint>
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
  `, styles: ["/* angular:styles/component:scss;892a2d18102db02a2533723349075b6c5a7669c8851cc58cb74ed81391bf7a2d;c:/Users/fwille/Desktop/art-work/libs/feature-auth/src/lib/register/register.component.ts */\n.banner-error {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "libs/feature-auth/src/lib/register/register.component.ts", lineNumber: 143 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-T4FANJKF.js.map
