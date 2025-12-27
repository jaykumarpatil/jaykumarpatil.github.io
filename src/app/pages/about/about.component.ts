import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about">
      <div class="container">
        <h1 class="page-title animate-fade-in">About <span class="text-gradient">Me</span></h1>
        <div class="about-content">
          <div class="about-text animate-fade-in delay-100">
            <p class="intro">{{ portfolioDataService.profile.summary }}</p>
            <p class="goal">{{ portfolioDataService.profile.shortGoal }}</p>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Location</span>
                <span class="info-value">{{ portfolioDataService.profile.location }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">{{ portfolioDataService.profile.email }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Experience</span>
                <span class="info-value">10+ Years</span>
              </div>
            </div>
          </div>
          <div class="value-bullets animate-fade-in delay-150">
            <h2 class="section-subtitle">Core Expertise</h2>
            <div class="bullets-list">
              @for (bullet of portfolioDataService.valueBullets; track bullet.text) {
                <div class="bullet-item">
                  <span class="bullet-icon">{{ bullet.icon }}</span>
                  <span class="bullet-text">{{ bullet.text }}</span>
                </div>
              }
            </div>
          </div>
          <div class="education-section animate-fade-in delay-200">
            <h2 class="section-subtitle">Education</h2>
            <div class="education-list">
              @for (edu of portfolioDataService.education; track edu.degree) {
                <div class="education-item">
                  <div class="edu-period">{{ edu.year }}</div>
                  <div class="edu-details">
                    <h3>{{ edu.degree }}</h3>
                    <p class="edu-institution">{{ edu.institution }}</p>
                    <p class="edu-location">{{ edu.location }}</p>
                    <p class="edu-grade">{{ edu.grade }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div class="journey-section animate-fade-in delay-300">
          <h2 class="section-subtitle">My Journey</h2>
          <div class="timeline">
            @for (step of portfolioDataService.journey; track step.period) {
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <span class="timeline-period">{{ step.period }}</span>
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
        <div class="interests-section animate-fade-in delay-400">
          <h2 class="section-subtitle">Interests & Focus Areas</h2>
          <div class="interests-grid">
            @for (interest of portfolioDataService.interests; track interest.title) {
              <div class="interest-item">
                <span class="interest-icon">{{ interest.icon }}</span>
                <div class="interest-content">
                  <h4>{{ interest.title }}</h4>
                  <p>{{ interest.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about { 
      padding-block: var(--space-3xl) var(--space-section);
      min-height: 100vh; 
    }
    .container { 
      max-width: var(--container-max);
      margin-inline: auto;
      padding-inline: var(--container-padding);
    }
    .page-title { 
      font-size: var(--text-4xl);
      font-weight: 700;
      margin-bottom: var(--space-2xl);
      text-align: center;
      color: var(--color-neutral);
    }
    .text-gradient { 
      background: var(--gradient-home);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .about-content { 
      display: grid;
      gap: var(--space-2xl);
      margin-bottom: var(--space-3xl);
    }
    .intro { 
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      margin-bottom: var(--space-md);
    }
    .goal { 
      font-size: var(--text-lg);
      color: var(--color-creative);
      font-weight: 500;
      margin-bottom: var(--space-xl);
    }
    .info-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-lg);
    }
    .info-item { 
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      backdrop-filter: blur(20px);
    }
    .info-label { 
      display: block;
      font-size: var(--text-sm);
      color: var(--color-muted);
      margin-bottom: var(--space-xs);
    }
    .info-value { 
      font-size: var(--text-lg);
      font-weight: 600;
      color: var(--color-neutral);
    }
    .section-subtitle { 
      font-size: var(--text-2xl);
      font-weight: 600;
      color: var(--color-creative);
      margin-bottom: var(--space-lg);
    }
    .bullets-list { 
      display: grid;
      gap: var(--space-md);
    }
    .bullet-item { 
      display: flex;
      align-items: center;
      gap: var(--space-md);
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-md) var(--space-lg);
      transition: all var(--duration-normal) var(--ease-out);
    }
    .bullet-item:hover { 
      border-color: rgba(200, 245, 66, 0.3);
      transform: translateX(5px);
    }
    .bullet-icon { font-size: var(--text-2xl); }
    .bullet-text { 
      color: var(--color-neutral);
      font-size: var(--text-base);
    }
    .education-list { 
      display: grid;
      gap: var(--space-md);
    }
    .education-item { 
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: var(--space-lg);
      padding: var(--space-lg);
      background: var(--bg-glass);
      border-radius: var(--radius-lg);
      border: var(--border-subtle);
      transition: all var(--duration-normal) var(--ease-out);
    }
    .education-item:hover { 
      border-color: rgba(34, 211, 238, 0.3);
      transform: translateX(5px);
    }
    .edu-period { 
      font-size: var(--text-sm);
      color: var(--color-success);
      font-weight: 600;
    }
    .edu-details h3 { 
      font-size: var(--text-base);
      font-weight: 600;
      color: var(--color-neutral);
      margin-bottom: var(--space-xs);
    }
    .edu-institution { 
      color: var(--color-subtle);
      font-size: var(--text-sm);
    }
    .edu-location { 
      color: var(--color-muted);
      font-size: var(--text-sm);
    }
    .edu-grade { 
      color: var(--color-creative);
      font-size: var(--text-sm);
      margin-top: var(--space-xs);
    }
    .journey-section { margin-bottom: var(--space-3xl); }
    .timeline { 
      position: relative;
      padding-left: var(--space-xl);
    }
    .timeline::before { 
      content: '';
      position: absolute;
      left: 6px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--gradient-home);
    }
    .timeline-item { 
      position: relative;
      padding-bottom: var(--space-xl);
    }
    .timeline-marker { 
      position: absolute;
      left: calc(var(--space-xl) * -1);
      top: 0;
      width: 14px;
      height: 14px;
      background: var(--color-success);
      border-radius: 50%;
      border: 3px solid var(--bg-base);
    }
    .timeline-content { 
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      transition: all var(--duration-normal) var(--ease-out);
    }
    .timeline-content:hover { 
      border-color: rgba(200, 245, 66, 0.3);
    }
    .timeline-period { 
      font-size: var(--text-sm);
      color: var(--color-success);
      font-weight: 600;
    }
    .timeline-content h3 { 
      font-size: var(--text-lg);
      font-weight: 600;
      color: var(--color-neutral);
      margin: var(--space-xs) 0;
    }
    .timeline-content p { 
      color: var(--color-subtle);
      font-size: var(--text-base);
      line-height: var(--leading-normal);
    }
    .interests-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-md);
    }
    .interest-item { 
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      background: var(--bg-glass);
      border: 1px solid rgba(200, 245, 66, 0.15);
      border-radius: var(--radius-xl);
      padding: var(--space-lg);
      transition: all var(--duration-normal) var(--ease-out);
    }
    .interest-item:hover { 
      border-color: rgba(200, 245, 66, 0.4);
      transform: translateY(-3px);
    }
    .interest-icon { font-size: var(--text-3xl); }
    .interest-content h4 { 
      font-size: var(--text-base);
      font-weight: 600;
      color: var(--color-neutral);
      margin-bottom: var(--space-xs);
    }
    .interest-content p { 
      color: var(--color-subtle);
      font-size: var(--text-sm);
    }
    .animate-fade-in { 
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-150 { animation-delay: 0.15s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @media (max-width: 600px) {
      .education-item { grid-template-columns: 1fr; gap: var(--space-xs); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-in { animation: none; opacity: 1; }
    }
  `]
})
export class AboutComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}
