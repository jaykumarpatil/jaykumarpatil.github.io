import { Component, OnInit, inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { PortfolioDataService, Project } from '../../services/portfolio-data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="project-detail" *ngIf="project">
      <div class="container container-narrow">
        <header class="project-header animate-fade-in">
          <a routerLink="/projects" class="btn-pill btn-pill-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Back to Projects</span>
          </a>
          <h1 class="project-title">{{ project.name }}</h1>
          <div class="project-meta">
            <span class="meta-item">
              <strong>Role:</strong> {{ project.role }}
            </span>
            <span class="meta-item">
              <strong>Client:</strong> {{ project.client }}
            </span>
            <span class="meta-item">
              <strong>Period:</strong> {{ project.period }}
            </span>
          </div>
        </header>

        <section class="project-content animate-fade-in delay-100">
          <div class="content-group">
            <h2>Project Overview</h2>
            <p>{{ project.impactSummary }}</p>
          </div>

          <div class="content-grid">
            <div class="content-group" *ngIf="project.challenges?.length">
              <h2>Challenges</h2>
              <ul>
                <li *ngFor="let challenge of project.challenges">{{ challenge }}</li>
              </ul>
            </div>

            <div class="content-group" *ngIf="project.solutions?.length">
              <h2>The Solution</h2>
              <ul>
                <li *ngFor="let solution of project.solutions">{{ solution }}</li>
              </ul>
            </div>
          </div>

          <div class="content-group" *ngIf="project.outcomes?.length">
            <h2>Key Results</h2>
            <div class="outcomes-grid">
              <div class="outcome-card" *ngFor="let outcome of project.outcomes">
                {{ outcome }}
              </div>
            </div>
          </div>

          <div class="content-group">
            <h2>Key Responsibilities</h2>
            <ul class="responsibilities-list">
              <li *ngFor="let resp of project.responsibilities">{{ resp }}</li>
            </ul>
          </div>

          <div class="content-group">
            <h2>Technologies Used</h2>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tag of project.tags">{{ tag }}</span>
            </div>
            <p class="tech-stack-detail">{{ project.technology }}</p>
          </div>

          <footer class="project-footer" *ngIf="project.liveDemoUrl || project.githubUrl">
            <a *ngIf="project.liveDemoUrl" [href]="project.liveDemoUrl" target="_blank" class="btn btn-primary">
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="btn btn-secondary">
              View Source
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </footer>
        </section>
      </div>
    </article>
  `,
  styles: [`
    .project-detail {
      padding-block: var(--space-4xl) var(--space-section);
      min-height: 100vh;
    }
    .project-header {
      margin-bottom: var(--space-2xl);
    }
    .project-title {
      font-size: var(--text-5xl);
      margin-bottom: var(--space-md);
      background: var(--gradient-home);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .project-meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-lg);
      margin-bottom: var(--space-3xl);
      padding-bottom: var(--space-lg);
      border-bottom: var(--border-subtle);
      color: var(--color-subtle);
    }
    .meta-item strong {
      color: var(--color-neutral);
      margin-right: 4px;
    }
    .content-group {
      margin-bottom: var(--space-3xl);
    }
    .content-group h2 {
      font-size: var(--text-2xl);
      margin-bottom: var(--space-lg);
      color: var(--color-neutral);
    }
    .content-group p {
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
    }
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-2xl);
      margin-bottom: var(--space-3xl);
    }
    @media (max-width: 768px) {
      .content-grid { grid-template-columns: 1fr; }
    }
    .content-group ul {
      list-style: none;
      padding: 0;
    }
    .content-group li {
      position: relative;
      padding-left: var(--space-lg);
      margin-bottom: var(--space-sm);
      color: var(--color-subtle);
    }
    .content-group li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--color-success);
    }
    .outcomes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-md);
    }
    .outcome-card {
      background: rgba(var(--rgb-success), 0.05);
      border: 1px solid rgba(var(--rgb-success), 0.1);
      padding: var(--space-md);
      border-radius: var(--radius-md);
      color: var(--color-success);
      font-weight: 500;
      text-align: center;
    }
    .responsibilities-list li {
      margin-bottom: var(--space-md);
    }
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-bottom: var(--space-md);
    }
    .tech-tag {
      background: var(--bg-surface);
      border: var(--border-default);
      color: var(--color-neutral);
      padding: 4px var(--space-sm);
      border-radius: var(--radius-md);
      font-size: var(--text-xs);
    }
    .tech-stack-detail {
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      color: var(--color-creative);
    }
    .project-footer {
      display: flex;
      gap: var(--space-md);
      margin-top: var(--space-4xl);
      padding-top: var(--space-2xl);
      border-top: var(--border-subtle);
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private portfolioDataService = inject(PortfolioDataService);
  private meta = inject(Meta);
  private title = inject(Title);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  project?: Project;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['id'];
      this.project = this.portfolioDataService.projects.find(p => p.slug === slug);

      if (!this.project) {
        this.router.navigate(['/projects']);
        return;
      }

      this.updateMetaTags();
      this.addJsonLd();
    });
  }

  private updateMetaTags() {
    if (!this.project) return;

    this.title.setTitle(`${this.project.name} | Jay Kumar Patil Portfolio`);
    this.meta.updateTag({ name: 'description', content: this.project.impactSummary });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: this.project.name });
    this.meta.updateTag({ property: 'og:description', content: this.project.impactSummary });
    this.meta.updateTag({ property: 'og:url', content: `https://jaykumarpatil.com/projects/${this.project.slug}` });
  }

  private addJsonLd() {
    if (!this.project) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": this.project.name,
      "description": this.project.impactSummary,
      "creator": {
        "@type": "Person",
        "name": "Jay Kumar Patil"
      },
      "keywords": this.project.tags.join(', '),
      "about": {
        "@type": "Organization",
        "name": this.project.client
      }
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.renderer.appendChild(this.document.head, script);
  }
}
