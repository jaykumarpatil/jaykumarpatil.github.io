import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer" role="contentinfo" aria-label="Site footer">
      <div class="footer-container">
        
        <!-- Main Footer Content -->
        <div class="footer-grid">
          
          <!-- Brand Column -->
          <div class="footer-brand">
            <a routerLink="/" class="brand-link" aria-label="Jay Kumar Patil - Home">
              <span class="brand-icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="10" fill="currentColor" class="brand-bg"/>
                  <path d="M10 12h4v12c0 2-1 4-4 4" stroke="var(--bg-base)" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M18 12h4c3 0 5 2 5 5s-2 5-5 5h-4V12z" stroke="var(--bg-base)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 22v6" stroke="var(--bg-base)" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </span>
              <span class="brand-text">Jay Kumar Patil</span>
            </a>
            <p class="brand-tagline">
              Senior Engineering Lead specializing in Cloud-native systems, DevOps automation, and scalable architectures.
            </p>
            
            <!-- Social Links -->
            <nav class="social-nav" aria-label="Social media links">
              <ul class="social-list" role="list">
                @if (portfolioDataService.profile.socialLinks.github) {
                  <li>
                    <a 
                      [href]="portfolioDataService.profile.socialLinks.github" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="social-link"
                      aria-label="GitHub Profile">
                      <svg width="24" height="24" aria-hidden="true"><use href="#icon-github"></use></svg>
                    </a>
                  </li>
                }
                @if (portfolioDataService.profile.socialLinks.linkedin) {
                  <li>
                    <a 
                      [href]="portfolioDataService.profile.socialLinks.linkedin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="social-link"
                      aria-label="LinkedIn Profile">
                      <svg width="24" height="24" aria-hidden="true"><use href="#icon-linkedin"></use></svg>
                    </a>
                  </li>
                }
                @if (portfolioDataService.profile.email) {
                  <li>
                    <a 
                      [href]="'mailto:' + portfolioDataService.profile.email" 
                      class="social-link"
                      aria-label="Email Jay Kumar Patil">
                      <svg width="24" height="24" aria-hidden="true"><use href="#icon-mail"></use></svg>
                    </a>
                  </li>
                }
              </ul>
            </nav>
          </div>

          <!-- Quick Links -->
          <nav class="footer-nav" aria-label="Quick links">
            <h3 class="nav-title">Navigate</h3>
            <ul class="nav-list" role="list">
              @for (link of quickLinks; track link.path) {
                <li>
                  <a [routerLink]="link.path" class="nav-link">
                    <svg class="link-icon" width="18" height="18" aria-hidden="true"><use [attr.href]="'#' + link.icon"></use></svg>
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Expertise -->
          <div class="footer-expertise">
            <h3 class="nav-title">Expertise</h3>
            <ul class="expertise-list" role="list">
              @for (skill of expertise; track skill) {
                <li class="expertise-tag">{{ skill }}</li>
              }
            </ul>
          </div>

          <!-- Contact CTA -->
          <div class="footer-cta">
            <h3 class="cta-title">Let's Build Something Amazing</h3>
            <p class="cta-text">
              Looking for a technical lead to design resilient, high-performance systems for your organization?
            </p>
            <a routerLink="/contact" class="btn btn-primary cta-button">
              <span>Get In Touch</span>
              <svg width="18" height="18" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
            </a>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="bottom-content">
            <p class="copyright">
              © {{ currentYear }} Jay Kumar Patil. Crafted with 
              <span aria-label="love" class="heart">❤️</span> 
              using Angular {{ angularVersion }}
            </p>
            <div class="bottom-links">
              <span class="status-indicator" aria-label="Currently available for work">
                <span class="status-dot" aria-hidden="true"></span>
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-surface);
      border-top: 1px solid var(--border-subtle);
      margin-top: auto;
    }

    .footer-container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-3xl) var(--space-lg) var(--space-xl);
    }

    /* Footer Grid - 2026 Asymmetric Layout */
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
      margin-bottom: var(--space-2xl);
    }

    @media (min-width: 640px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
        gap: var(--space-xl);
      }
    }

    /* Brand Column */
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .brand-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      text-decoration: none;
      color: var(--color-neutral);
      width: fit-content;
      padding: var(--space-xs);
      margin: calc(var(--space-xs) * -1);
      border-radius: var(--radius-lg);
      transition: all 0.2s ease;
    }

    .brand-link:hover {
      background: var(--bg-elevated);
    }

    .brand-link:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    .brand-icon {
      width: 40px;
      height: 40px;
      color: var(--color-success);
    }

    .brand-text {
      font-size: var(--text-lg);
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .brand-tagline {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: 1.6;
      max-width: 280px;
    }

    /* Social Navigation */
    .social-nav {
      margin-top: var(--spacing-sm);
    }

    .social-list {
      display: flex;
      gap: var(--space-sm);
      list-style: none;
      padding: 0;
      margin: var(--space-xs) 0 0 0;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--touch-target);
      height: var(--touch-target);
      background: var(--bg-elevated);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      color: var(--text-secondary);
      transition: all 0.2s ease;
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .social-link:hover {
      color: var(--color-success);
      border-color: var(--color-success);
      transform: translateY(-2px);
    }

    .social-link:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    /* Footer Navigation */
    .footer-nav,
    .footer-expertise {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .nav-title {
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      padding: var(--spacing-xs) 0;
      min-height: var(--touch-target);
      color: var(--text-secondary);
      text-decoration: none;
      font-size: var(--text-sm);
      transition: color 0.2s ease;
    }

    .nav-link:hover {
      color: var(--color-success);
    }

    .nav-link:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
      border-radius: var(--radius-sm);
    }

    .link-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      margin-right: var(--space-xs);
    }

    .link-icon svg {
      width: 18px;
      height: 18px;
    }

    /* Expertise Tags */
    .expertise-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      list-style: none;
      padding: 0;
      margin: var(--space-xs) 0 0 0;
    }

    .expertise-tag {
      padding: var(--space-xs) var(--space-sm);
      background: var(--bg-elevated);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      color: var(--color-subtle);
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .expertise-tag:hover {
      border-color: var(--color-success);
      color: var(--color-neutral);
    }

    /* CTA Column */
    .footer-cta {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding: var(--space-lg);
      background: var(--bg-surface);
      border: 1px solid rgba(200, 245, 66, 0.15);
      border-radius: var(--radius-xl);
    }

    .cta-title {
      font-size: var(--text-lg);
      font-weight: 700;
      color: var(--color-neutral);
      margin: 0;
      line-height: 1.3;
    }

    .cta-text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: 1.6;
      margin: 0;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-md) var(--space-xl);
      margin-top: var(--space-sm);
      min-height: var(--touch-target);
      width: fit-content;
      background: var(--color-success);
      color: #050507;
      font-size: var(--text-sm);
      font-weight: 600;
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(200, 245, 66, 0.3);
      color: #050507;
    }

    .cta-button:focus-visible {
      outline: 3px solid var(--border-focus);
      outline-offset: 2px;
    }

    /* Footer Bottom */
    .footer-bottom {
      padding-top: var(--spacing-xl);
      border-top: 1px solid var(--border-subtle);
    }

    .bottom-content {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
      align-items: center;
      text-align: center;
    }

    @media (min-width: 768px) {
      .bottom-content {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
      }
    }

    .copyright {
      font-size: var(--text-sm);
      color: var(--text-tertiary);
      margin: 0;
    }

    .heart {
      display: inline-block;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    @media (prefers-reduced-motion: reduce) {
      .heart {
        animation: none;
      }
    }

    .bottom-links {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      font-size: var(--text-xs);
      color: var(--color-success);
      font-weight: 500;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--color-success);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.9); }
    }

    @media (prefers-reduced-motion: reduce) {
      .status-dot {
        animation: none;
      }
    }
  `]
})
export class FooterComponent {
  constructor(public portfolioDataService: PortfolioDataService) { }
  currentYear = new Date().getFullYear();
  angularVersion = '21';

  quickLinks = [
    { path: '/', label: 'Home', icon: 'icon-home' },
    { path: '/about', label: 'About', icon: 'icon-about' },
    { path: '/experience', label: 'Experience', icon: 'icon-experience' },
    { path: '/projects', label: 'Projects', icon: 'icon-projects' },
    { path: '/skills', label: 'Skills', icon: 'icon-skills' },
    { path: '/blog', label: 'Blog', icon: 'icon-blog' },
    { path: '/contact', label: 'Contact', icon: 'icon-contact' }
  ];

  expertise = [
    'Cloud Architecture',
    'DevOps Automation',
    'CI/CD Pipelines',
    'Microservices',
    'Kubernetes',
    'AWS / Azure / GCP',
    'Java / Spring Boot',
    'System Design'
  ];
}
