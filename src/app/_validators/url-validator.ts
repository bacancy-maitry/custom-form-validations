import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {

  if (control.errors && !control.errors.validUrl) {
    // return if another validator has already found an error on the control
    return false;
  }

  if (!control.value.startsWith('https') || !control.value.includes('.com')) {
    return { validUrl: true };
  }
  return null;
}
