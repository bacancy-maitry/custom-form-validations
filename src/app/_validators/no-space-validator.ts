import { AbstractControl } from '@angular/forms';

export function NoSpaceValidator(control: AbstractControl) {

  if ((control.value as string).indexOf(' ') >= 0) {
    return { cannotContainSpace: true };
  }
  return null;
}
