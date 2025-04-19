import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>{{ portfolioDataService.profile.name }}</h3>
            <p>{{ portfolioDataService.profile.title }}</p>
            <p>{{ portfolioDataService.profile.email }} | {{ portfolioDataService.profile.phone }}</p>
          </div>
          
          <div class="social-links">
            <a *ngIf="portfolioDataService.profile.socialLinks.linkedin" [href]="portfolioDataService.profile.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a *ngIf="portfolioDataService.profile.socialLinks.github" [href]="portfolioDataService.profile.socialLinks.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a *ngIf="portfolioDataService.profile.socialLinks.blog" [href]="portfolioDataService.profile.socialLinks.blog" target="_blank" rel="noopener noreferrer" aria-label="Blog">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; {{ currentYear }} {{ portfolioDataService.profile.name }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f8fafc;
      padding: 2rem 0;
      margin-top: 2rem;
      border-top: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) footer {
      background-color: #1a1a1a;
      border-top: 1px solid #333;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }
    
    .footer-info h3 {
      margin: 0 0 0.5rem;
      color: #1e293b;
      font-size: 1.2rem;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .footer-info h3 {
      color: #e2e8f0;
    }
    
    .footer-info p {
      margin: 0.25rem 0;
      color: #64748b;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .footer-info p {
      color: #94a3b8;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #f1f5f9;
      color: #475569;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .social-links a {
      background-color: #333;
      color: #94a3b8;
    }
    
    .social-links a:hover {
      background-color: #2563eb;
      color: white;
      transform: translateY(-3px);
    }
    
    :host-context(.dark-mode) .social-links a:hover {
      background-color: #3b82f6;
    }
    
    .copyright {
      text-align: center;
      color: #64748b;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .copyright {
      color: #94a3b8;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  constructor(public portfolioDataService: PortfolioDataService) {}
}
