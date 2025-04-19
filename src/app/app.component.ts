import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  template: `
    <div class="app-container" [ngClass]="{'dark-mode': darkMode}">
      <app-header (toggleDarkMode)="toggleDarkMode()"></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      transition: background-color 0.3s ease, color 0.3s ease;
      background-color: #f8f9fa;
      color: #212529;
    }
    
    .dark-mode {
      background-color: #121212;
      color: #e9ecef;
    }
    
    main {
      flex: 1;
      padding: 2rem 0;
    }
  `]
})
export class AppComponent {
  darkMode = false;
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}