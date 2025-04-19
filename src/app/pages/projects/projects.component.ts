import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of portfolioDataService.projects">
            <h3>{{ project.name }}</h3>
            <div class="project-meta">
              <span class="client">{{ project.client }}</span>
              <span class="organization">{{ project.organization }}</span>
              <span class="team-size">Team Size: {{ project.teamSize }}</span>
              <span class="period">{{ project.period }}</span>
            </div>
            <div class="project-tech">{{ project.technology }}</div>
            <ul class="responsibilities">
              <li *ngFor="let responsibility of project.responsibilities">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .project-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .project-card h3 {
      color: #2563eb;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }

    .project-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 15px;
    }

    .project-meta span {
      font-size: 0.9rem;
      color: #666;
      padding-right: 10px;
      border-right: 1px solid #ddd;
    }

    .project-meta span:last-child {
      border-right: none;
    }

    .project-tech {
      font-weight: 500;
      color: #2563eb;
      margin-bottom: 15px;
    }

    .responsibilities {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .responsibilities li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      line-height: 1.6;
      color: #444;
    }

    .responsibilities li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #2563eb;
    }
  `]
})
export class ProjectsComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}