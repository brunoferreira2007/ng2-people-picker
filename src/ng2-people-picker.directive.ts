import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[PeoplePickerDirective]'
})
export class PeoplePickerDirective {

  constructor(private el: ElementRef) {
  }

}
