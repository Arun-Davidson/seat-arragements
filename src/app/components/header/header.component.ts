import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MAT_MENU_DEFAULT_OPTIONS, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation:ViewEncapsulation.None,
  providers: [
    {
      provide: MAT_MENU_DEFAULT_OPTIONS,
      useValue: { overlayPanelClass: 'menu-overlay-pane' }
    }
  ]
})
export class HeaderComponent {
  userName: string = 'Arun'; // Replace with dynamic user name if needed
  dropdownVisible: boolean = false;
  readonly router = inject(Router);
  
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    console.log('User logged out');
    this.router.navigate(['/sign-in']);
    // Implement logout logic, e.g., clear user data, redirect to login, etc.
  }
}
