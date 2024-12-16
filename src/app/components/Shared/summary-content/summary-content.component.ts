import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-summary-content',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './summary-content.component.html',
  styleUrl: './summary-content.component.scss'
})
export class SummaryContentComponent implements OnInit {

  @Input() from: any = '';
  @Input() confirmationData: any;
  @Output() goToHomeEvent = new EventEmitter<any>();

  contentHeading = '';
  constructor(private router: Router) {

  }
  ngOnInit() {
    if (this.from == 'summary_page') {
      this.contentHeading = 'Opps! Page not found'
    } else {
      this.contentHeading = 'Congratulations, Your favourite seat booked'
    }

  }
  redirectToHome() {
    this.router.navigate(['/home']);
    this.goToHomeEvent.emit(true)
  }
  formatTime(time:any){
    if(time){
     return moment(time, 'HH:mm').format('hh:mm A');

    }  
  return ''
  }
}
