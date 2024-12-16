import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-booking-sidebar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatNativeDateModule],
  templateUrl: './booking-sidebar.component.html',
  styleUrl: './booking-sidebar.component.scss'
})
export class BookingSidebarComponent {
  bookingForm: FormGroup;
  buildings = ['Building A', 'Building B', 'Bhavani Building'];
  floors = [1, 2, 3, 4, 5, 6];

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      building: [''],
      floor: [1],
      startDate: [''],
      endDate: [''],
      startTime: ['09:30'],
      endTime: ['17:30']
    });
  }

  onSubmit() {
    console.log(this.bookingForm.value);
    // Logic to handle seat booking
  }
}
