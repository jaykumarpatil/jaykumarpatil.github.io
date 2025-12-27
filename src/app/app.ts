import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SvgSpritesComponent } from './shared/icons/svg-sprites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SvgSpritesComponent],
  template: `
    <!-- SVG Sprite Definitions - Available globally -->
    <app-svg-sprites />
    
    <div class="app-container">
      <app-header></app-header>
      <main id="main-content">
        <div class="route-content">
          <router-outlet></router-outlet>
        </div>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
    
    main {
      flex: 1;
    }

    .route-content {
      animation: fadeInUp 300ms ease-out both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class App {}