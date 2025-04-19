import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('0.6s 0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" @fadeIn>
            <h1>Hello, I'm <span class="highlight">{{ portfolioDataService.profile.name }}</span></h1>
            <h2>{{ portfolioDataService.profile.title }}</h2>
            <p>{{ portfolioDataService.profile.summary }}</p>
            <div class="cta-buttons">
              <a routerLink="/contact" class="btn btn-primary">Contact Me</a>
              <a routerLink="/projects" class="btn btn-outline">View Projects</a>
            </div>
          </div>
          <div class="hero-stats" @slideIn>
            <div class="stat">
              <span class="stat-value">10+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat-value">5+</span>
              <span class="stat-label">Companies</span>
            </div>
            <div class="stat">
              <span class="stat-value">20+</span>
              <span class="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="highlights">
      <div class="container">
        <h2 class="section-title" @fadeIn>Key Achievements</h2>
        <div class="highlights-grid">
          <div class="highlight-card" @fadeIn>
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3>Improved Search Performance</h3>
            <p>Reduced search response time from 0.8s to 0.2s, boosting user experience by 75%.</p>
          </div>
          <div class="highlight-card" @fadeIn>
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>Data Optimization</h3>
            <p>Reduced data size by 68% through compression and optimization techniques.</p>
          </div>
          <div class="highlight-card" @fadeIn>
            <div class="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>High Traffic Systems</h3>
            <p>Engineered systems capable of handling millions of requests per second.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="skills-overview">
      <div class="container">
        <h2 class="section-title" @fadeIn>Technical Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of technicalCategories" @fadeIn>
            <h3>{{ category.name }}</h3>
            <ul>
              <li *ngFor="let skill of category.skills">{{ skill }}</li>
            </ul>
          </div>
        </div>
        <div class="cta-center">
          <a routerLink="/skills" class="btn btn-outline">View All Skills</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .hero {
      padding: 5rem 0;
      min-height: 80vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, rgba(219, 234, 254, 0.5) 0%, rgba(239, 246, 255, 0.7) 100%);
      transition: background 0.3s ease;
    }
    
    :host-context(.dark-mode) .hero {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%);
    }
    
    .hero-content {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      justify-content: space-between;
      align-items: center;
    }
    
    .hero-text {
      flex: 1;
      min-width: 300px;
    }
    
    .hero-text h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #0f172a;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .hero-text h1 {
      color: #f8fafc;
    }
    
    .hero-text h2 {
      font-size: 1.5rem;
      color: #64748b;
      margin-bottom: 1.5rem;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .hero-text h2 {
      color: #94a3b8;
    }
    
    .hero-text p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #334155;
      margin-bottom: 2rem;
      max-width: 600px;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .hero-text p {
      color: #cbd5e1;
    }
    
    .highlight {
      color: #2563eb;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .highlight {
      color: #3b82f6;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 500;
      text-decoration: none;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background-color: #2563eb;
      color: white;
      border: 2px solid #2563eb;
    }
    
    .btn-primary:hover {
      background-color: #1d4ed8;
      border-color: #1d4ed8;
      transform: translateY(-2px);
    }
    
    .btn-outline {
      background-color: transparent;
      color: #2563eb;
      border: 2px solid #2563eb;
    }
    
    :host-context(.dark-mode) .btn-outline {
      color: #3b82f6;
      border-color: #3b82f6;
    }
    
    .btn-outline:hover {
      background-color: rgba(37, 99, 235, 0.1);
      transform: translateY(-2px);
    }
    
    :host-context(.dark-mode) .btn-outline:hover {
      background-color: rgba(59, 130, 246, 0.1);
    }
    
    .hero-stats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
    
    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      min-width: 120px;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .stat {
      background-color: #1e293b;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
    
    .stat:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    :host-context(.dark-mode) .stat:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
    }
    
    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2563eb;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .stat-value {
      color: #3b82f6;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: #64748b;
      text-align: center;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .stat-label {
      color: #94a3b8;
    }
    
    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
      color: #0f172a;
      position: relative;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .section-title {
      color: #f8fafc;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: #2563eb;
      transition: background-color 0.3s ease;
    }
    
    :host-context(.dark-mode) .section-title::after {
      background-color: #3b82f6;
    }
    
    .highlights {
      padding: 5rem 0;
      background-color: white;
      transition: background-color 0.3s ease;
    }
    
    :host-context(.dark-mode) .highlights {
      background-color: #0f172a;
    }
    
    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .highlight-card {
      background-color: #f8fafc;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    :host-context(.dark-mode) .highlight-card {
      background-color: #1e293b;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
    
    .highlight-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    :host-context(.dark-mode) .highlight-card:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
    }
    
    .highlight-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: rgba(219, 234, 254, 0.7);
      color: #2563eb;
      border-radius: 50%;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .highlight-icon {
      background-color: rgba(37, 99, 235, 0.2);
      color: #3b82f6;
    }
    
    .highlight-card:hover .highlight-icon {
      background-color: #2563eb;
      color: white;
    }
    
    :host-context(.dark-mode) .highlight-card:hover .highlight-icon {
      background-color: #3b82f6;
    }
    
    .highlight-card h3 {
      font-size: 1.25rem;
      color: #0f172a;
      margin-bottom: 1rem;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .highlight-card h3 {
      color: #f8fafc;
    }
    
    .highlight-card p {
      color: #64748b;
      line-height: 1.5;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .highlight-card p {
      color: #94a3b8;
    }
    
    .skills-overview {
      padding: 5rem 0;
      background-color: #f8fafc;
      transition: background-color 0.3s ease;
    }
    
    :host-context(.dark-mode) .skills-overview {
      background-color: #1a1a1a;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .skill-category {
      background-color: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .skill-category {
      background-color: #1e293b;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
    
    .skill-category:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    :host-context(.dark-mode) .skill-category:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
    }
    
    .skill-category h3 {
      font-size: 1.25rem;
      color: #0f172a;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-mode) .skill-category h3 {
      color: #f8fafc;
      border-bottom-color: #334155;
    }
    
    .skill-category ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .skill-category li {
      padding: 0.5rem 0;
      color: #64748b;
      display: flex;
      align-items: center;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .skill-category li {
      color: #94a3b8;
    }
    
    .skill-category li::before {
      content: '✓';
      margin-right: 0.5rem;
      color: #2563eb;
      font-weight: bold;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .skill-category li::before {
      color: #3b82f6;
    }
    
    .cta-center {
      text-align: center;
    }
    
    @media (max-width: 768px) {
      .hero {
        padding: 3rem 0;
      }
      
      .hero-content {
        flex-direction: column;
        gap: 2rem;
      }
      
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .hero-text h2 {
        font-size: 1.25rem;
      }
      
      .hero-stats {
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  technicalCategories: { name: string, skills: string[] }[] = [];
  
  constructor(public portfolioDataService: PortfolioDataService) {}
  
  ngOnInit() {
    this.technicalCategories = this.portfolioDataService.skills.map(category => ({
      name: category.category,
      skills: category.items.map(item => item.name)
    }));
  }
}