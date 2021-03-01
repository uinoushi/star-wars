import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormInputTextComponent),
        multi: true,
    },
  ],
})
export class FormInputTextComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder = '';
  @Input() error = '';
  @Input() cssClassInput = '';
  @Input() cssClassLabel = '';
  @Input() isDisabled = false;
  @Input() readOnly = false;
  isTouched = false;
  value = '';

  registerOnChange(onChange: (value: string) => void): void {
      this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
      this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
  }

  writeValue(value: string): void {
      this.value = value || '';
  }

  pushChanges(value: string) {
      this.writeValue(value);
      this.onChange(this.value);
  }

  pushTouches() {
      this.isTouched = true;
      this.onTouched();
  }

  protected onTouched = () => {};
  protected onChange = (value: string) => {};
}
