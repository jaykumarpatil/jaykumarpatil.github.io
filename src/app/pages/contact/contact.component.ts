import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact">
      <div class="container">
        <h1 class="page-title animate-fade-in">Get In <span class="text-gradient">Touch</span></h1>
        <p class="contact-intro animate-fade-in delay-100">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div class="contact-content">
          <div class="contact-info animate-fade-in delay-200">
            <div class="info-card">
              <div class="info-icon">📧</div>
              <h3>Email</h3>
              <a [href]="'mailto:' + portfolioDataService.profile.email">{{ portfolioDataService.profile.email }}</a>
            </div>
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h3>Location</h3>
              <p>{{ portfolioDataService.profile.location }}</p>
            </div>
            <div class="info-card">
              <div class="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <a [href]="portfolioDataService.profile.socialLinks.linkedin" target="_blank" rel="noopener">Connect on LinkedIn</a>
            </div>
            <div class="info-card">
              <div class="info-icon">💻</div>
              <h3>GitHub</h3>
              <a [href]="portfolioDataService.profile.socialLinks.github" target="_blank" rel="noopener">View GitHub Profile</a>
            </div>
          </div>
          <div class="cta-section animate-fade-in delay-300">
            <div class="cta-card">
              <h2>Let's Work Together!</h2>
              <p>Whether you have a project in mind, need technical consultation, or want to explore collaboration opportunities, I'd love to hear from you.</p>
              <a [href]="'mailto:' + portfolioDataService.profile.email" class="btn btn-primary">Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact { 
      padding-block: var(--space-3xl) var(--space-section);
      min-height: 100vh;
    }
    .container { 
      max-width: 900px;
      margin-inline: auto;
      padding-inline: var(--container-padding);
    }
    .page-title { 
      font-size: var(--text-4xl);
      font-weight: 700;
      margin-bottom: var(--space-md);
      text-align: center;
      color: var(--color-neutral);
    }
    .text-gradient { 
      background: var(--gradient-home);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .contact-intro { 
      text-align: center;
      font-size: var(--text-lg);
      color: var(--color-subtle);
      margin-bottom: var(--space-2xl);
      max-width: 600px;
      margin-inline: auto;
      line-height: var(--leading-relaxed);
    }
    .contact-content { 
      display: grid;
      gap: var(--space-2xl);
    }
    .contact-info { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-lg);
    }
    .info-card { 
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: var(--space-lg);
      text-align: center;
      transition: all var(--duration-normal) var(--ease-out);
      backdrop-filter: blur(20px);
    }
    .info-card:hover { 
      border-color: rgba(200, 245, 66, 0.3);
      transform: translateY(-5px);
      box-shadow: var(--elevation-3);
    }
    .info-icon { 
      font-size: var(--text-3xl);
      margin-bottom: var(--space-md);
    }
    .info-card h3 { 
      font-size: var(--text-base);
      font-weight: 600;
      color: var(--color-creative);
      margin-bottom: var(--space-xs);
    }
    .info-card p { 
      color: var(--color-subtle);
      font-size: var(--text-base);
    }
    .info-card a { 
      color: var(--color-success);
      text-decoration: none;
      font-size: var(--text-base);
      transition: color var(--duration-quick) var(--ease-out);
    }
    .info-card a:hover { color: var(--color-creative); }
    .cta-section { 
      display: flex;
      justify-content: center;
    }
    .cta-card { 
      background: linear-gradient(135deg, rgba(200, 245, 66, 0.08), rgba(34, 211, 238, 0.06));
      border: 1px solid rgba(200, 245, 66, 0.2);
      border-radius: var(--radius-2xl);
      padding: var(--space-2xl);
      text-align: center;
      max-width: 500px;
      backdrop-filter: blur(20px);
    }
    .cta-card h2 { 
      font-size: var(--text-3xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin-bottom: var(--space-md);
    }
    .cta-card p { 
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin-bottom: var(--space-xl);
    }
    .btn { 
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-md) var(--space-xl);
      border-radius: var(--radius-md);
      font-weight: 600;
      font-size: var(--text-base);
      text-decoration: none;
      transition: all var(--duration-normal) var(--ease-out);
    }
    .btn-primary { 
      background: var(--gradient-home);
      color: var(--bg-base);
      box-shadow: var(--glow-success);
    }
    .btn-primary:hover { 
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 0 40px rgba(200, 245, 66, 0.5);
    }
    .animate-fade-in { 
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-in { animation: none; opacity: 1; }
      .btn-primary:hover { transform: none; }
    }
  `]
})
export class ContactComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}
