import { FormControl } from '@angular/forms';

export function specialCharValidator(control: FormControl) {
  const pattern = /[!@#$%^&*(),.?":{}|<>]/;
  const hasSpecialChar = pattern.test(control.value);

  return hasSpecialChar ? { hasSpecialChar: true } : null;
}
