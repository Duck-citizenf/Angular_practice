import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'datepicker-overview-example',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  template: `
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="picker">
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `
})
export class DatepickerComponent {}