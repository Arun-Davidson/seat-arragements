import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SummaryContentComponent } from '../../components/Shared/summary-content/summary-content.component';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule,FlexLayoutModule,SummaryContentComponent],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss'
})
export class BookingSummaryComponent {

}
