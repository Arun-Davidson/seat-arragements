import { CommonModule } from '@angular/common';
import { Component, inject, model, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SeatSelectionComponent } from '../Shared/seat-selection/seat-selection.component';
import { SeatBookingFormComponent } from '../Shared/seat-booking-form/seat-booking-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SeatBookingFullMapViewComponent } from '../seat-booking-full-map-view/seat-booking-full-map-view.component';
interface Seat {
  id: string;
  status: string;
}




@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [CommonModule,  FlexLayoutModule,
    MatDialogModule,
    SeatBookingFormComponent,
    SeatSelectionComponent
    ],
  templateUrl: './seat-booking.component.html',
  styleUrl: './seat-booking.component.scss',
  encapsulation:ViewEncapsulation.None,
 
})
export class SeatBookingComponent {

  readonly dialog = inject(MatDialog);
  
  selectedDateRange!: DateRange<Date>;
  selected = model<Date | null>(null);

  sections: any[] = [
    {
      id: 1, rows: [
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'selected' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'filled' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'vacant' },
            { id: 'A3', status: 'filled' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'filled' },
            { id: 'A7', status: 'vacant' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'filled' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'vacant' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'filled' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'filled' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'vacant' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'vacant' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'filled' },
            { id: 'A7', status: 'vacant' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'vacant' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'filled' },
            { id: 'A7', status: 'vacant' },
          ]
        }
      ]
    },
    {
      id: 2, rows: [
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'selected' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'filled' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'vacant' },
            { id: 'A3', status: 'filled' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'vacant' },
            { id: 'A6', status: 'filled' },
            { id: 'A7', status: 'vacant' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'vacant' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'filled' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'filled' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'filled' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'filled' },
            { id: 'A4', status: 'vacant' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'vacant' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'vacant' },
            { id: 'A2', status: 'vacant' },
            { id: 'A3', status: 'filled' },
            { id: 'A4', status: 'vacant' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'filled' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'vacant' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'filled' },
            { id: 'A6', status: 'vacant' },
            { id: 'A7', status: 'vacant' },
          ]
        },
        {
          seats: [
            { id: 'A1', status: 'vacant' },
            { id: 'A2', status: 'filled' },
            { id: 'A3', status: 'vacant' },
            { id: 'A4', status: 'filled' },
            { id: 'A5', status: 'vacant' },
            { id: 'A6', status: 'filled' },
            { id: 'A7', status: 'filled' },
          ]
        }
      ]
    }
  ];
  
  selectedSeats: Seat[] = [];
 
  toggleSeat(seat: Seat) {
    if (seat.status == 'vacant') {
      const index = this.selectedSeats.indexOf(seat);
      if (index >= 0) {
        seat.status = 'selected'
        this.selectedSeats.splice(index, 1); // Deselect the seat
      } else {
        this.selectedSeats.push(seat); // Select the seat
      }
    } else if (seat.status == 'selected') {
      seat.status = 'vacant'
    }
  }

  bookSeats() {
    // Implement your booking logic here (e.g., API call)
    console.log('Booked seats:', this.selectedSeats);
    // Reset selected seats after booking
    this.selectedSeats = [];
  }

  viewFullMapHandler(value:any) {
    const dialogRef = this.dialog.open(SeatBookingFullMapViewComponent, {
      width: '1279px',
      data:{sections:value},
      panelClass:'full_map_view_seat_booking'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  
    // this.dialog.open(SeatBookingFullMapViewComponent);
  }
}
