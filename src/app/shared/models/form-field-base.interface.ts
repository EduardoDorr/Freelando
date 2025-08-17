export interface FormFieldBase {
  label: string;
  formControlName: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  errorMessages?: { [key: string]: string};
  validator?: any[];
  asyncValidators?: any[];
  width?: string;
}