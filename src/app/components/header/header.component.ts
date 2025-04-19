import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  animations: [
    trigger('menuAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('0.3s ease-in')
      ]),
      transition('visible => hidden', [
        animate('0.3s ease-out')
      ])
    ])
  ],
  template: `
    <header>
      <div class="container">
        <div class="navbar">
          <div class="logo" [routerLink]="['/']">
            <span class="name">{{ portfolioDataService.profile.name }}</span>
            <span class="title">{{ portfolioDataService.profile.title }}</span>
          </div>
          
          <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
            <span [ngClass]="{'open': menuOpen}"></span>
          </button>
          
          <nav class="nav-links" [@menuAnimation]="menuOpen ? 'visible' : 'hidden'" [ngClass]="{'show': menuOpen}">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="menuOpen = false">Home</a>
            <a routerLink="/about" routerLinkActive="active" (click)="menuOpen = false">About</a>
            <a routerLink="/experience" routerLinkActive="active" (click)="menuOpen = false">Experience</a>
            <a routerLink="/projects" routerLinkActive="active" (click)="menuOpen = false">Projects</a>
            <a routerLink="/skills" routerLinkActive="active" (click)="menuOpen = false">Skills</a>
            <a routerLink="/contact" routerLinkActive="active" (click)="menuOpen = false">Contact</a>
            <button class="theme-toggle" (click)="onToggleDarkMode()" aria-label="Toggle dark mode">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) header {
      background-color: rgba(15, 23, 42, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .logo {
      cursor: pointer;
      display: flex;
      flex-direction: column;
    }
    
    .name {
      font-size: 1.2rem;
      font-weight: 700;
      color: #2563eb;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .name {
      color: #3b82f6;
    }
    
    .title {
      font-size: 0.8rem;
      color: #64748b;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .title {
      color: #94a3b8;
    }
    
    .nav-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #334155;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
    
    :host-context(.dark-mode) .nav-links a {
      color: #e2e8f0;
    }
    
    .nav-links a:hover {
      color: #2563eb;
      background-color: rgba(37, 99, 235, 0.1);
      transform: translateY(-2px);
    }
    
    :host-context(.dark-mode) .nav-links a:hover {
      color: #3b82f6;
      background-color: rgba(59, 130, 246, 0.1);
    }
    
    .nav-links a.active {
      color: #2563eb;
      font-weight: 600;
    }
    
    :host-context(.dark-mode) .nav-links a.active {
      color: #3b82f6;
    }
    
    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #2563eb;
      transition: width 0.3s ease;
    }
    
    :host-context(.dark-mode) .nav-links a.active::after {
      background-color: #3b82f6;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      color: #334155;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .theme-toggle {
      color: #e2e8f0;
    }
    
    .theme-toggle:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transform: rotate(30deg);
    }
    
    :host-context(.dark-mode) .theme-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 20px;
      position: relative;
    }
    
    .menu-toggle span, 
    .menu-toggle span::before, 
    .menu-toggle span::after {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: #334155;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .menu-toggle span, 
    :host-context(.dark-mode) .menu-toggle span::before, 
    :host-context(.dark-mode) .menu-toggle span::after {
      background-color: #e2e8f0;
    }
    
    .menu-toggle span {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .menu-toggle span::before {
      content: '';
      top: -8px;
    }
    
    .menu-toggle span::after {
      content: '';
      bottom: -8px;
    }
    
    .menu-toggle span.open {
      background-color: transparent;
    }
    
    .menu-toggle span.open::before {
      top: 0;
      transform: rotate(45deg);
    }
    
    .menu-toggle span.open::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
        z-index: 1001;
      }
      
      .nav-links {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 70%;
        max-width: 300px;
        background-color: white;
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        justify-content: flex-start;
        gap: 2rem;
      }
      
      :host-context(.dark-mode) .nav-links {
        background-color: #1e1e1e;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
      }
      
      .nav-links.show {
        transform: translateX(0);
      }
      
      .nav-links a {
        width: 100%;
        padding: 0.5rem 0;
      }
    }
  `]
})
export class HeaderComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();
  menuOpen = false;
  
  constructor(public portfolioDataService: PortfolioDataService) {}
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}
