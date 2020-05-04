import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class AuthValidators {
  static UsernameShouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'islam@gmail.com') {
          resolve({ UsernameShouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static MatchPassword(control: AbstractControl): ValidationErrors | null {
    // here we have the 'passwords' group
    const passControl = control.get('password');
    const confirmControl = control.get('confirm');
    const pass = passControl.value;
    const confirm = confirmControl.value;
    if (pass !== confirm) {
      confirmControl.setErrors({ MatchPassword: true });
    }
    return null;
  }
}
