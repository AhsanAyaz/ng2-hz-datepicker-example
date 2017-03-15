import { Component, ViewEncapsulation } from '@angular/core';
import { HZDatePickerComponent, DPConfig } from 'ng2-hz-datepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Ng2 Horizontal Date Picker Example!';

  simpleDpConfig: DPConfig = {

  }

  withDaysDpConfig: DPConfig = {
    showDays: true
  }

  withBSDpConfig: DPConfig = {
    btnClasses: "btn btn-default",
    navBtnClasses: "btn btn-default",
    selectedItemClass: 'btn-success'
  }
}
