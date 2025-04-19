import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of portfolioDataService.experience">
            <div class="timeline-content">
              <div class="experience-header">
                <h3>{{ exp.title }}</h3>
                <span class="company">{{ exp.company }}</span>
                <span class="period">{{ exp.period }}</span>
                <span class="location">{{ exp.location }}</span>
              </div>
              <ul class="achievements">
                <li *ngFor="let achievement of exp.achievements">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      padding: 80px 0;
      background-color: #ffffff;
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

    .timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #2563eb;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;
      padding-left: 30px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -4px;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #2563eb;
      border: 2px solid #fff;
    }

    .timeline-content {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .experience-header {
      margin-bottom: 20px;
    }

    .experience-header h3 {
      color: #2563eb;
      font-size: 1.5rem;
      margin: 0 0 10px 0;
    }

    .company {
      display: block;
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 5px;
    }

    .period, .location {
      display: inline-block;
      font-size: 0.9rem;
      color: #666;
      margin-right: 15px;
    }

    .achievements {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .achievements li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      line-height: 1.6;
      color: #444;
    }

    .achievements li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #2563eb;
    }

    @media (max-width: 768px) {
      .timeline::before {
        left: 15px;
      }

      .timeline-item {
        padding-left: 45px;
      }

      .timeline-item::before {
        left: 11px;
      }
    }
  `]
})
export class ExperienceComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}