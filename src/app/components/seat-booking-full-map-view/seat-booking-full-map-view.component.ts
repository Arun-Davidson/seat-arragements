import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SeatSelectionComponent } from '../Shared/seat-selection/seat-selection.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-seat-booking-full-map-view',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatIconModule,
    MatDialogClose,FlexLayoutModule,SeatSelectionComponent],
  templateUrl: './seat-booking-full-map-view.component.html',
  styleUrl: './seat-booking-full-map-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class SeatBookingFullMapViewComponent {
  sectionsArray=[];
  readonly dialogRef = inject(MatDialogRef<SeatBookingFullMapViewComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  constructor(){
    this.sectionsArray=this.data?.sections;
  }
}


