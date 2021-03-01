import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-form-input-select',
  templateUrl: './form-input-select.component.html',
  styleUrls: ['./form-input-select.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormInputSelectComponent),
        multi: true,
    },
  ],
})
export class FormInputSelectComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() error = '';
  @Input() options: DropdownOption[] = [];
  @Input() isDisabled = false;
  @Input() showMissedValue = false;

  @Output()
  changeValue = new EventEmitter<Boolean>();

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
      if (this.value || value) {
          this.value = value || '';
      }
  }

  pushChanges(value: string) {
      this.writeValue(value);
      this.onChange(this.value);
      this.changeValue.emit(true);
  }

  pushTouches() {
      this.isTouched = true;
      this.onTouched();
  }

  optionsWithEmptyValue() {
      return [{}, ...this.options];
  }

  protected onTouched = () => {};
  protected onChange = (value: string) => {};
}
