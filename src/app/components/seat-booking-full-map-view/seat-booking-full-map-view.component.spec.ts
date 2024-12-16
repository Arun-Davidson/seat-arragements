import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBookingFullMapViewComponent } from './seat-booking-full-map-view.component';

describe('SeatBookingFullMapViewComponent', () => {
  let component: SeatBookingFullMapViewComponent;
  let fixture: ComponentFixture<SeatBookingFullMapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatBookingFullMapViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatBookingFullMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
