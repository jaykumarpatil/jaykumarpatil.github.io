import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="projects">
      <div class="container">
        <h1 class="page-title animate-fade-in">Featured <span class="text-gradient">Case Studies</span></h1>
        <p class="page-subtitle animate-fade-in">I deliver high-impact solutions for global enterprises through technical leadership and collaboration.</p>
        <div class="projects-grid">
          @for (project of portfolioDataService.projects; track project.slug; let i = $index) {
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
              <div class="project-tags">
                @for (tech of project.technology; track tech) {
                  <span class="tag">{{ tech }}</span>
                }
              </div>
              <div class="project-footer">
                <span class="team-size">Team: {{ project.teamSize }} members</span>
                <a [routerLink]="['/projects', project.slug]" class="btn-pill btn-pill-forward">
                  <span>View Case Study</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
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
      margin-bottom: var(--space-sm);
      text-align: center;
      color: var(--color-neutral);
    }
    .page-subtitle {
      font-size: var(--text-lg);
      color: var(--color-subtle);
      text-align: center;
      margin-bottom: var(--space-2xl);
      max-width: 600px;
      margin-inline: auto;
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
      border-color: rgba(var(--rgb-success), 0.3);
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
      background: rgba(var(--rgb-success), 0.1);
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
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .team-size { 
      font-size: var(--text-sm);
      color: var(--color-muted);
    }
    .btn-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      color: var(--color-success);
      font-size: var(--text-sm);
      font-weight: 600;
      transition: all var(--duration-quick) var(--ease-out);
    }
    .btn-link:hover {
      gap: var(--space-sm);
    }
    .btn-link svg {
      transition: transform var(--duration-quick) var(--ease-out);
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
  constructor(public portfolioDataService: PortfolioDataService) { }
}
