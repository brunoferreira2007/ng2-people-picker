import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'ng2-people-pickerPipe'
})
@Injectable()
export class PeoplePickerPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
