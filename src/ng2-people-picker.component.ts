import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { PeoplePickerService} from './ng2-people-picker.service';
@Component({
  selector: 'ng2-people-picker-component',
  templateUrl: './people-picker.component.html',
  styleUrls: ['./people-picker.component.css'],
})
export class PeoplePickerComponent implements DoCheck {
  @Input() selectedPersons: any[];
  @Input() maxUsers: number;
  @Input() disable: boolean;
  @Output() selectedPersonsChange = new EventEmitter();
  searchPerson: string;
  peoplePicker: any[];
  loading = false;
  constructor( private sharepoint: PeoplePickerService) {
  }
  ngDoCheck() {
    this.selectedPersonsChange.next(this.selectedPersons);
  }
  onSearchChange(searchValues: string) {
    this.loading = true;
    this.peoplePicker = [];
    this.sharepoint.getPeoplePicker(searchValues).then(result => {
      this.peoplePicker = JSON.parse(result.d.ClientPeoplePickerSearchUser);
      this.peoplePicker = this.peoplePicker.filter(people => people.Key.startsWith('i'));
      this.loading = false;
    });
  }
  addPersonToPicker(item: any): void {
    this.sharepoint.getUserByRacf(item.Key).then(user => {
      const index = this.selectedPersons.findIndex(person => user.data.Id === person.Id);
      if (index === -1) {
        this.selectedPersons.push(user.data);
      }
      this.searchPerson = '';
      this.peoplePicker = [];
    });
  }
  remove(index: number): void {
    if (!this.disable) {
      if (index !== -1) {
        this.selectedPersons.splice(index, 1);
      }
    }
  }
}
