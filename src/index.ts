import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeoplePickerComponent } from './ng2-people-picker.component';
import { PeoplePickerDirective } from './ng2-people-picker.directive';
import { PeoplePickerPipe } from './ng2-people-picker.pipe';
import { PeoplePickerService } from './ng2-people-picker.service';

export * from './ng2-people-picker.component';
export * from './ng2-people-picker.directive';
export * from './ng2-people-picker.pipe';
export * from './ng2-people-picker.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PeoplePickerComponent,
    PeoplePickerDirective,
    PeoplePickerPipe
  ],
  exports: [
    PeoplePickerComponent,
    PeoplePickerDirective,
    PeoplePickerPipe,
  ]
})
export class PeoplePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PeoplePickerModule,
      providers: [PeoplePickerService]
    };
  }
}
