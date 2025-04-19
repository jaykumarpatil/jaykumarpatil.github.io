import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <h3>Email</h3>
              <p>{{ portfolioDataService.profile.email }}</p>
            </div>
            <div class="info-item">
              <h3>Phone</h3>
              <p>{{ portfolioDataService.profile.phone }}</p>
            </div>
            <div class="info-item">
              <h3>Location</h3>
              <p>{{ portfolioDataService.profile.location }}</p>
            </div>
            <div class="social-links">
              <a *ngIf="portfolioDataService.profile.socialLinks?.linkedin" 
                 [href]="portfolioDataService.profile.socialLinks.linkedin" 
                 target="_blank" 
                 rel="noopener noreferrer">
                LinkedIn
              </a>
              <a *ngIf="portfolioDataService.profile.socialLinks?.github" 
                 [href]="portfolioDataService.profile.socialLinks.github" 
                 target="_blank" 
                 rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 80px 0;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-title {
      text-align: center;
      margin-bottom: 50px;
      font-size: 2.5rem;
      color: #333;
    }

    .contact-content {
      display: flex;
      justify-content: center;
      gap: 50px;
    }

    .contact-info {
      flex: 1;
      max-width: 500px;
    }

    .info-item {
      margin-bottom: 30px;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .info-item h3 {
      color: #2563eb;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }

    .info-item p {
      color: #666;
      font-size: 1.1rem;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 30px;
    }

    .social-links a {
      display: inline-block;
      padding: 12px 25px;
      background-color: #2563eb;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px);
    }

    :host-context(.dark-mode) {
      .contact-section {
        background-color: #121212;
      }

      .section-title {
        color: #f8fafc;
      }

      .info-item {
        background: #1e293b;
      }

      .info-item h3 {
        color: #3b82f6;
      }

      .info-item p {
        color: #94a3b8;
      }
    }

    @media (max-width: 768px) {
      .contact-content {
        flex-direction: column;
      }

      .contact-info {
        max-width: 100%;
      }
    }
  `]
})
export class ContactComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}