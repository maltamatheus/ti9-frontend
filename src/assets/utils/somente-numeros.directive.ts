import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appSomenteNumeros]',
  standalone: true // Use standalone se estiver em Angular moderno
})
export class DiretivaSomenteNumeros {

  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initalValue = event.target.value;
    const newValue = initalValue.replace(/[^0-9]*/g, '');

    if (initalValue !== newValue) {
      this.ngControl.control?.setValue(newValue);
    }
  }
}
