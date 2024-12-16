import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SeatBookingFullMapViewComponent } from '../../seat-booking-full-map-view/seat-booking-full-map-view.component';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule,FlexLayoutModule,MatIconModule,MatButtonModule,MatCardModule,
    MatMenuModule,MatDialogModule],
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.scss',
  encapsulation:ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SeatSelectionComponent {
@Input() sections:any;
@Input() from:any;
constructor(private dialog: MatDialog) {}
@Output() viewFullMapEvent = new EventEmitter<any>();

openDialog() {
  console.log('Opening dialog...');
  this.viewFullMapEvent.emit(this.sections);

}
}
