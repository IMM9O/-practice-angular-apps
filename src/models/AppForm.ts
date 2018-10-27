import { FormGroup } from '@angular/forms';

export interface Appform {
  createFormGroup(): FormGroup;
  displayCssFor(field: string | Array<string>): string;
  onSubmit(): void;
}
