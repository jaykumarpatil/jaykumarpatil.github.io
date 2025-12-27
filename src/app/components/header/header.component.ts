import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Skip Link for Accessibility -->
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <!-- Floating Navigation Hub - 2026 Pattern -->
    <header 
      class="nav-hub" 
      [class.scrolled]="isScrolled()"
      [class.hidden]="isHidden()"
      role="banner"
      aria-label="Main navigation">
      
      <nav class="nav-container" role="navigation" aria-label="Primary">
        <!-- Brand - Clear Identity -->
        <a 
          routerLink="/" 
          class="brand" 
          aria-label="Jay Kumar Patil - Home"
          (click)="closeMenu()">
          <span class="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="currentColor" class="brand-bg"/>
              <path d="M10 12h4v12c0 2-1 4-4 4" stroke="var(--bg-base)" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M18 12h4c3 0 5 2 5 5s-2 5-5 5h-4V12z" stroke="var(--bg-base)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 22v6" stroke="var(--bg-base)" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="brand-text">
            <span class="brand-name">Jay Kumar</span>
            <span class="brand-role">AI Engineer</span>
          </span>
        </a>

        <!-- Desktop Navigation - Pill Style -->
        <div class="nav-pills" role="list">
          <a 
            routerLink="/" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: true}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-home"></use></svg>
            <span class="pill-text">Home</span>
          </a>
          <a 
            routerLink="/about" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/about') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-about"></use></svg>
            <span class="pill-text">About</span>
          </a>
          <a 
            routerLink="/experience" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/experience') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-experience"></use></svg>
            <span class="pill-text">Experience</span>
          </a>
          <a 
            routerLink="/projects" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/projects') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-projects"></use></svg>
            <span class="pill-text">Projects</span>
          </a>
          <a 
            routerLink="/skills" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/skills') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-skills"></use></svg>
            <span class="pill-text">Skills</span>
          </a>
          <a 
            routerLink="/articles" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/articles') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-articles"></use></svg>
            <span class="pill-text">Articles</span>
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="nav-pill"
            role="listitem"
            [attr.aria-current]="isActive('/contact') ? 'page' : null">
            <svg class="pill-icon" width="20" height="20" aria-hidden="true"><use href="#icon-contact"></use></svg>
            <span class="pill-text">Contact</span>
          </a>
        </div>

        <!-- Action Buttons -->
        <div class="nav-actions">
          <!-- Theme Toggle (Future) -->
          <button 
            class="action-btn theme-toggle" 
            aria-label="Toggle theme"
            title="Toggle theme"
            (click)="toggleTheme()">
            @if (isDarkMode()) {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            } @else {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            }
          </button>

          <!-- CTA Button -->
          <a 
            routerLink="/contact" 
            class="cta-btn"
            (click)="closeMenu()">
            <span>Let's Talk</span>
            <svg class="cta-icon" width="16" height="16" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>

          <!-- Mobile Menu Toggle -->
          <button 
            class="menu-toggle" 
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu">
            <span class="menu-icon" [class.open]="menuOpen()" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu - Full Screen Overlay -->
      <div 
        id="mobile-menu"
        class="mobile-menu" 
        [class.open]="menuOpen()"
        [attr.aria-hidden]="!menuOpen()"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu">
        
        <nav class="mobile-nav" role="navigation" aria-label="Mobile navigation">
          <a 
            routerLink="/" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: true}"
            class="mobile-link"
            style="animation-delay: 0ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-home"></use></svg>
            <span class="link-text">Home</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a 
            routerLink="/about" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="mobile-link"
            style="animation-delay: 50ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/about') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-about"></use></svg>
            <span class="link-text">About</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a 
            routerLink="/experience" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="mobile-link"
            style="animation-delay: 100ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/experience') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-experience"></use></svg>
            <span class="link-text">Experience</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a 
            routerLink="/projects" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="mobile-link"
            style="animation-delay: 150ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/projects') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-projects"></use></svg>
            <span class="link-text">Projects</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a 
            routerLink="/skills" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="mobile-link"
            style="animation-delay: 200ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/skills') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-skills"></use></svg>
            <span class="link-text">Skills</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a 
            routerLink="/articles" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="mobile-link"
            style="animation-delay: 250ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/articles') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-articles"></use></svg>
            <span class="link-text">Articles</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: false}"
            class="mobile-link"
            style="animation-delay: 300ms"
            (click)="closeMenu()"
            [attr.aria-current]="isActive('/contact') ? 'page' : null"
            [attr.tabindex]="menuOpen() ? 0 : -1">
            <svg class="link-icon" width="24" height="24" aria-hidden="true"><use href="#icon-contact"></use></svg>
            <span class="link-text">Contact</span>
            <svg class="link-arrow" width="20" height="20" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
        </nav>

        <div class="mobile-footer">
          <div class="social-links">
            <a href="https://github.com/jaykumarpatil" 
               target="_blank" 
               rel="noopener noreferrer"
               class="social-link"
               aria-label="GitHub Profile"
               [attr.tabindex]="menuOpen() ? 0 : -1">
              <svg width="24" height="24" aria-hidden="true"><use href="#icon-github"></use></svg>
            </a>
            <a href="https://www.linkedin.com/in/jaykumarpatil/" 
               target="_blank" 
               rel="noopener noreferrer"
               class="social-link"
               aria-label="LinkedIn Profile"
               [attr.tabindex]="menuOpen() ? 0 : -1">
              <svg width="24" height="24" aria-hidden="true"><use href="#icon-linkedin"></use></svg>
            </a>
          </div>
          <p class="mobile-tagline">Building the future with AI</p>
        </div>
      </div>
    </header>
  `,
  styles: [`
    /* Skip Link - Accessibility First */
    .skip-link {
      position: fixed;
      top: -100%;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-success);
      color: var(--bg-base);
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: var(--radius-full);
      font-weight: 600;
      z-index: 10000;
      transition: top 0.2s ease;
    }

    .skip-link:focus {
      top: var(--spacing-md);
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    /* Navigation Hub - Floating Glass Design */
    .nav-hub {
      position: fixed;
      top: var(--space-md);
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - var(--space-md) * 2);
      max-width: 1400px;
      z-index: 1000;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (prefers-reduced-motion: reduce) {
      .nav-hub {
        transition: none;
      }
    }

    .nav-hub.scrolled {
      top: var(--space-sm);
    }

    .nav-hub.hidden {
      transform: translateX(-50%) translateY(-120%);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      box-shadow: var(--elevation-2);
      overflow: hidden;
    }

    /* Brand */
    .brand {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      text-decoration: none;
      color: var(--color-neutral);
      min-height: var(--touch-target);
      padding: var(--space-xs);
      border-radius: var(--radius-lg);
      transition: all 0.2s ease;
    }

    .brand:hover {
      background: var(--bg-elevated);
    }

    .brand:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .brand-icon {
      width: 40px;
      height: 40px;
      color: var(--color-success);
      transition: transform 0.3s ease;
    }

    .brand:hover .brand-icon {
      transform: scale(1.05) rotate(-3deg);
    }

    .brand-bg {
      opacity: 1;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
      white-space: nowrap;
    }

    .brand-name {
      font-size: var(--text-base);
      font-weight: 700;
      letter-spacing: -0.02em;
      white-space: nowrap;
    }

    .brand-role {
      font-size: var(--text-xs);
      color: var(--text-tertiary);
      font-weight: 500;
      white-space: nowrap;
    }

    /* Navigation Pills - Desktop */
    .nav-pills {
      display: none;
      align-items: center;
      gap: var(--space-xs);
      padding: var(--space-xs);
      background: var(--bg-surface);
      border-radius: var(--radius-lg);
    }

    @media (min-width: 900px) {
      .nav-pills {
        display: flex;
      }
    }

    .nav-pill {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      padding: var(--space-xs) var(--space-md);
      min-height: var(--touch-target);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--color-subtle);
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .nav-pill:hover {
      color: var(--color-neutral);
      background: var(--bg-elevated);
    }

    .nav-pill:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .nav-pill.active {
      color: var(--bg-base);
      background: var(--color-success);
    }

    .pill-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .pill-icon svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    /* Nav Actions */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--touch-target);
      height: var(--touch-target);
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      font-size: var(--text-lg);
      color: var(--color-neutral);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      background: var(--bg-elevated);
      border-color: var(--color-success);
      color: var(--color-success);
    }

    .action-btn:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .cta-btn {
      display: none;
      align-items: center;
      gap: var(--space-xs);
      padding: var(--space-xs) var(--space-md);
      min-height: 40px;
      background: var(--color-success);
      color: #050507;
      font-size: var(--text-sm);
      font-weight: 600;
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      white-space: nowrap;
      flex-shrink: 0;
    }

    @media (min-width: 640px) {
      .cta-btn {
        display: flex;
      }
    }

    @media (min-width: 1024px) {
      .cta-btn {
        padding: var(--space-sm) var(--space-lg);
      }
    }

    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(200, 245, 66, 0.3);
      color: #050507;
    }

    .cta-btn:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .cta-icon {
      display: none;
    }

    @media (min-width: 1024px) {
      .cta-icon {
        display: block;
        width: 16px;
        height: 16px;
      }
    }

    /* Mobile Menu Toggle */
    .menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--touch-target);
      height: var(--touch-target);
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    @media (min-width: 900px) {
      .menu-toggle {
        display: none;
      }
    }

    .menu-toggle:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
      border-radius: var(--radius-md);
    }

    .menu-icon {
      position: relative;
      width: 24px;
      height: 18px;
    }

    .menu-icon span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-neutral);
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .menu-icon span:nth-child(1) { top: 0; }
    .menu-icon span:nth-child(2) { top: 50%; transform: translateY(-50%); }
    .menu-icon span:nth-child(3) { bottom: 0; }

    .menu-icon.open span:nth-child(1) {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    .menu-icon.open span:nth-child(2) {
      opacity: 0;
      transform: translateX(10px);
    }

    .menu-icon.open span:nth-child(3) {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }

    /* Mobile Menu Overlay */
    .mobile-menu {
      position: fixed;
      inset: 0;
      background: #050507;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 100px var(--space-lg) var(--space-xl);
    }

    .mobile-menu.open {
      z-index: 999;
      opacity: 1;
      visibility: visible;
    }

    @media (min-width: 900px) {
      .mobile-menu {
        display: none;
      }
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .mobile-link {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-lg);
      min-height: 60px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--color-neutral);
      font-size: var(--text-lg);
      font-weight: 500;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s ease;
    }

    .mobile-menu.open .mobile-link {
      transform: translateY(0);
      opacity: 1;
    }

    .mobile-link:hover,
    .mobile-link:focus-visible {
      background: var(--bg-elevated);
      border-color: var(--color-success);
    }

    .mobile-link:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .mobile-link.active {
      background: var(--color-success);
      color: var(--bg-base);
      border-color: var(--color-success);
    }

    .link-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }

    .link-icon svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    .link-text {
      flex: 1;
    }

    .link-arrow {
      opacity: 0.5;
      transition: transform 0.2s ease;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .mobile-link:hover .link-arrow {
      transform: translateX(4px);
      opacity: 1;
    }

    /* Mobile Footer */
    .mobile-footer {
      margin-top: auto;
      padding-top: var(--space-xl);
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      margin-bottom: var(--space-md);
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      color: var(--text-primary);
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .social-link svg {
      width: 24px;
      height: 24px;
    }

    .social-link:hover,
    .social-link:focus-visible {
      background: var(--bg-elevated);
      border-color: var(--color-success);
      transform: translateY(-2px);
    }

    .social-link:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .mobile-tagline {
      font-size: var(--text-sm);
      color: var(--text-tertiary);
    }

    /* Dark/Light mode adjustments handled by CSS variables */
  `]
})
export class HeaderComponent {
  private platformId = inject(PLATFORM_ID);
  
  menuOpen = signal(false);
  isScrolled = signal(false);
  isHidden = signal(false);
  isDarkMode = signal(true);
  
  private lastScrollY = 0;
  private scrollThreshold = 100;

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const currentScrollY = window.scrollY;
    
    // Update scrolled state
    this.isScrolled.set(currentScrollY > 50);
    
    // Smart hide/show based on scroll direction
    if (currentScrollY > this.scrollThreshold) {
      if (currentScrollY > this.lastScrollY + 10) {
        // Scrolling down - hide nav
        this.isHidden.set(true);
      } else if (currentScrollY < this.lastScrollY - 10) {
        // Scrolling up - show nav
        this.isHidden.set(false);
      }
    } else {
      this.isHidden.set(false);
    }
    
    this.lastScrollY = currentScrollY;
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.menuOpen()) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    }
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (this.isDarkMode()) {
        // Dark mode
        root.style.setProperty('--bg-base', '#050507');
        root.style.setProperty('--bg-elevated', '#0a0a0f');
        root.style.setProperty('--bg-surface', '#101016');
        root.style.setProperty('--bg-overlay', 'rgba(16, 16, 22, 0.85)');
        root.style.setProperty('--bg-glass', 'rgba(16, 16, 22, 0.6)');
        root.style.setProperty('--color-neutral', '#f8fafc');
        root.style.setProperty('--color-subtle', '#a1a1aa');
        root.style.setProperty('--color-muted', '#52525b');
        root.style.setProperty('--border-subtle', '1px solid rgba(255, 255, 255, 0.04)');
        root.style.setProperty('--border-default', '1px solid rgba(255, 255, 255, 0.08)');
      } else {
        // Light mode
        root.style.setProperty('--bg-base', '#fafafa');
        root.style.setProperty('--bg-elevated', '#ffffff');
        root.style.setProperty('--bg-surface', '#f4f4f5');
        root.style.setProperty('--bg-overlay', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--bg-glass', 'rgba(255, 255, 255, 0.7)');
        root.style.setProperty('--color-neutral', '#18181b');
        root.style.setProperty('--color-subtle', '#52525b');
        root.style.setProperty('--color-muted', '#a1a1aa');
        root.style.setProperty('--border-subtle', '1px solid rgba(0, 0, 0, 0.04)');
        root.style.setProperty('--border-default', '1px solid rgba(0, 0, 0, 0.08)');
      }
    }
  }

  private router = inject(Router);
  
  isActive(path: string): boolean {
    return this.router.url === path || (path !== '/' && this.router.url.startsWith(path));
  }
}
