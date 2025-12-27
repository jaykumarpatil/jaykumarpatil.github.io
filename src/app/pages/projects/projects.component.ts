import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="container">
        <h1 class="page-title animate-fade-in">My <span class="text-gradient">Projects</span></h1>
        <div class="projects-grid">
          @for (project of portfolioDataService.projects; track project.name; let i = $index) {
            <div class="project-card animate-fade-in" [style.animation-delay.ms]="i * 100">
              <div class="project-header">
                <h2>{{ project.name }}</h2>
                <span class="project-period">{{ project.period }}</span>
              </div>
              <div class="project-meta">
                <span class="project-client">{{ project.client }}</span>
                <span class="project-org">{{ project.organization }}</span>
              </div>
              <p class="project-description">{{ project.impactSummary }}</p>
              <div class="project-tech">
                <span class="tech-label">Tech Stack:</span>
                <span class="tech-value">{{ project.technology }}</span>
              </div>
              <ul class="project-responsibilities">
                @for (resp of project.responsibilities; track resp) {
                  <li>{{ resp }}</li>
                }
              </ul>
              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>
              <div class="project-footer">
                <span class="team-size">Team: {{ project.teamSize }} members</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects { 
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
    .projects-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: var(--space-xl);
    }
    .project-card { 
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: var(--space-xl);
      display: flex;
      flex-direction: column;
      transition: all var(--duration-normal) var(--ease-out);
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
      backdrop-filter: blur(20px);
    }
    .project-card:hover { 
      border-color: rgba(200, 245, 66, 0.3);
      transform: translateY(-8px);
      box-shadow: var(--elevation-4);
    }
    .project-header { 
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-md);
      margin-bottom: var(--space-sm);
    }
    .project-header h2 { 
      font-size: var(--text-xl);
      font-weight: 700;
      color: var(--color-neutral);
      line-height: var(--leading-snug);
    }
    .project-period { 
      font-size: var(--text-xs);
      color: var(--color-success);
      font-weight: 500;
      white-space: nowrap;
    }
    .project-meta { 
      display: flex;
      gap: var(--space-md);
      flex-wrap: wrap;
      margin-bottom: var(--space-md);
      font-size: var(--text-sm);
    }
    .project-client { 
      color: var(--color-creative);
      font-weight: 500;
    }
    .project-org { color: var(--color-muted); }
    .project-description { 
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin-bottom: var(--space-md);
    }
    .project-tech { 
      margin-bottom: var(--space-md);
      font-size: var(--text-sm);
    }
    .tech-label { 
      color: var(--color-muted);
      margin-right: var(--space-xs);
    }
    .tech-value { color: var(--color-neutral); }
    .project-responsibilities { 
      margin: 0 0 var(--space-md);
      padding-left: var(--space-lg);
      color: var(--color-subtle);
      font-size: var(--text-sm);
      line-height: var(--leading-normal);
    }
    .project-responsibilities li { margin-bottom: var(--space-xs); }
    .project-responsibilities li::marker { color: var(--color-creative); }
    .project-tags { 
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-bottom: var(--space-md);
    }
    .tag { 
      background: rgba(200, 245, 66, 0.1);
      color: var(--color-success);
      padding: 4px var(--space-sm);
      border-radius: var(--radius-md);
      font-size: var(--text-xs);
      font-weight: 500;
    }
    .project-footer { 
      margin-top: auto;
      padding-top: var(--space-md);
      border-top: var(--border-subtle);
    }
    .team-size { 
      font-size: var(--text-sm);
      color: var(--color-muted);
    }
    .animate-fade-in { 
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
    }
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @media (max-width: 400px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-in, .project-card { animation: none; opacity: 1; }
    }
  `]
})
export class ProjectsComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}
