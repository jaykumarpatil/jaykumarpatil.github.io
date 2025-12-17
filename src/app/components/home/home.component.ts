import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <div class="intro-section">
        <h1>Jay Kumar Patil</h1>
        <h2>Software Developer</h2>
        <p>Building modern web applications with cutting-edge technologies</p>
        <div class="cta-buttons">
          <a routerLink="/about" class="btn primary">About Me</a>
          <a routerLink="/projects" class="btn secondary">View Projects</a>
        </div>
      </div>
      <div class="social-links">
        <a href="https://in.linkedin.com/in/jaykumarpatil3004" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/jaykumarpatil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:contact@jaykumarpatil.com" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}