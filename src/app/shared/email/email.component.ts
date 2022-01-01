import { Component, forwardRef, Input, OnInit, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers:
    [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => EmailComponent),
      },
      // {
      //   provide: NG_VALIDATORS,
      //   multi: true,
      //   useExisting: EmailComponent
      // }
    ],
})
export class EmailComponent implements ControlValueAccessor {

  constructor() { }

  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() formControlName: string;
  @Input() parentForm: FormGroup;

  onChange: any = () => { }
  onTouch: any = () => {}
  disabled: boolean = false;
  val = "";
  set value(val) {
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }
  writeValue(value: any) {
    this.value = value
  }
  registerOnChange(fn: any) {
    this.onChange = fn
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
  changed(e) {
    this.onChange(e);
  }
  get formField(): FormControl {
    return this.parentForm?.get(this.formControlName) as FormControl;
  }

}
