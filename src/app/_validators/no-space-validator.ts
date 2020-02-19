import { AbstractControl } from '@angular/forms';

export function NoSpaceValidator(control: AbstractControl) {

  if (control.errors && !control.errors.cannotContainSpace) {
    // return if another validator has already found an error on the control
    return false;
  }

  if ((control.value as string).indexOf(' ') >= 0) {
    return { cannotContainSpace: true };
  }
  return null;
}
