import { Routes } from '@angular/router';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';
import { BookingSummaryComponent } from './pages/booking-summary/booking-summary.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    { path: '', component: SignInPageComponent },
    { path: 'sign-in', component: SignInPageComponent },
  {
    path: '',
    component: LayoutComponent, // Use LayoutComponent as a wrapper
    children: [
      { path: 'home', component: SeatBookingComponent }, 
      { path: 'booking-summary', component: BookingSummaryComponent },
    ],
  },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Default route

  ];
