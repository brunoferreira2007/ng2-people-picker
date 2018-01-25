/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PeoplePickerModule }  from 'ng2-people-picker';

@Component({
  selector: 'app',
  template: `<ng2-people-picker-component [(selectedPersons)]="selectedKAM" [maxUsers]="1" [disable]="disableKam"></ng2-people-picker-component>`
})
class AppComponent {
  welcomeText = 'hello World';
  selectedBP = [];
  selectedKAM = [];
  disableKam = false;
}


@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, PeoplePickerModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
