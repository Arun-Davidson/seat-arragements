import { CommonModule } from '@angular/common';
import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
// import { MATERIAL_DATEPICKER_FORMATS } from '../../seat-booking/seat-booking.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookingConfirmationPopupComponent } from '../Popup/booking-confirmation-popup/booking-confirmation-popup.component';
import { MatDialog } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

class CustomDateAdapter extends MomentDateAdapter {
  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow') {
    return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  }
}
export const MATERIAL_DATEPICKER_FORMATS = {
  parse: {
    dateInput: 'DD/MMM/YYYY',
  },
  display: {
    dateInput: 'DD/MMM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MMM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-seat-booking-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule,
    MatMenuModule, MatFormFieldModule,
    MatSelectModule, NgxMatTimepickerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonToggleModule
  ],
  templateUrl: './seat-booking-form.component.html',
  styleUrl: './seat-booking-form.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MATERIAL_DATEPICKER_FORMATS },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class SeatBookingFormComponent {
  bookingForm!: FormGroup;
  floors = [
    { label: '1', selected: false },
    { label: '2', selected: false },
    { label: '3', selected: false },
    { label: '4', selected: false },
    { label: '5', selected: false },
    { label: '6', selected: false },
  ];
  buildingArray=[
    {
      id:1,
      name:'Bhavani Building'
    }
  ]
  selectedDateRange!: DateRange<Date>;
  hideSingleSelectionIndicator = signal(true);
  
  
  readonly dialog = inject(MatDialog);
  constructor(private formBuilder: FormBuilder) {
    // Initialize the FormControl with the current time
    
    this.createbookingForm();
  }

  _onSelectedChange(date: Date): void {
    console.log(date,'datedatedatedate');
    
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(
        this.selectedDateRange.start,
        date
      );
    } else {
      this.selectedDateRange = new DateRange(date, null);
      this.bookingForm.patchValue({
        bookingDate:this.selectedDateRange
      }) 
    }
    this.bookingForm.patchValue({
      bookingDate:this.selectedDateRange
    }) 
  }

  createbookingForm() {
    const now = new Date();
    this.bookingForm = this.formBuilder.group({
      buildingName: ['',Validators.required],  
      bookingDate: ['',Validators.required],
      selectedFloor: ['',Validators.required],
      bookingStartTime: [this.formatTime(now),Validators.required],
      bookingEndTime: [this.formatTime(now),Validators.required]
    });
  }

  // Helper method to format the time (e.g., 'HH:mm')
  private formatTime(date: Date): string {
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }

  // Helper method to pad single-digit numbers with a leading zero
  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  bookSeat() {
    // this.viewFullMapEvent.emit(this.sections)
    if(this.bookingForm?.valid){
      const dialogRef = this.dialog.open(BookingConfirmationPopupComponent, {
        width: '876px',
        data:{
         formData: this.bookingForm.value
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  floorSelection(data:any,index:any){

    let status = !data?.selected;
    this.floors[index].selected = status;
  }
}
