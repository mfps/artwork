/**
 * Re-exports validateStandardSchema from @angular/forms/signals.
 *
 * Zod v4 implements the Standard Schema interface natively, so you can
 * pass a Zod schema directly to validateStandardSchema(s, zodSchema).
 *
 * Usage inside a form() schema callback:
 *   validateStandardSchema(s, myZodObjectSchema);
 *
 * @see https://briantree.se/angular-signal-forms-zod-validation-validatestandardschema/
 */
export { validateStandardSchema } from '@angular/forms/signals';
