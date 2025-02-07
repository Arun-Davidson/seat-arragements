import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SummaryContentComponent } from '../../summary-content/summary-content.component';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-booking-confirmation-popup',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, SummaryContentComponent, MatDialogModule],
  templateUrl: './booking-confirmation-popup.component.html',
  styleUrl: './booking-confirmation-popup.component.scss'
})
export class BookingConfirmationPopupComponent {

  readonly dialogRef = inject(MatDialogRef<BookingConfirmationPopupComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  confirmationData: any
  constructor() {
    this.confirmationData = this.data?.formData
  }
  ngOnInit() {

  }
  dialogClose(result: any) {
    if (result) {
      this.dialogRef.close(result)
    }
  }
}
