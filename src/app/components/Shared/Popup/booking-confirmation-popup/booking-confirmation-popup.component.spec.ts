import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingConfirmationPopupComponent } from './booking-confirmation-popup.component';

describe('BookingConfirmationPopupComponent', () => {
  let component: BookingConfirmationPopupComponent;
  let fixture: ComponentFixture<BookingConfirmationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingConfirmationPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingConfirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
