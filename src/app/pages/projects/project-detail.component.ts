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
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-bg"></div>
        <div class="container">
          <a routerLink="/projects" class="btn-pill btn-pill-back animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Back to Projects</span>
          </a>
          <h1 class="project-title animate-fade-in delay-100">
            {{ project.name }}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </h1>
          <p class="project-tagline animate-fade-in delay-200">{{ project.impactSummary }}</p>
          
          <!-- Meta Cards -->
          <div class="meta-cards animate-fade-in delay-300">
            <div class="meta-card">
              <div class="meta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div class="meta-content">
                <span class="meta-label">Role</span>
                <span class="meta-value">{{ project.role }}</span>
              </div>
            </div>
            <div class="meta-card">
              <div class="meta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div class="meta-content">
                <span class="meta-label">Client</span>
                <span class="meta-value">{{ project.client }}</span>
              </div>
            </div>
            <div class="meta-card">
              <div class="meta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div class="meta-content">
                <span class="meta-label">Duration</span>
                <span class="meta-value">{{ project.period }}</span>
              </div>
            </div>
            <div class="meta-card">
              <div class="meta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div class="meta-content">
                <span class="meta-label">Team Size</span>
                <span class="meta-value">{{ project.teamSize }} Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container container-narrow">
        <section class="project-content">
          <!-- Challenges & Solutions -->
          <div class="content-grid" *ngIf="project.challenges?.length || project.solutions?.length">
            <div class="glass-card animate-slide-up" *ngIf="project.challenges?.length">
              <div class="card-header">
                <div class="card-icon card-icon-warning">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <h2>The Challenges</h2>
              </div>
              <ul class="feature-list">
                <li *ngFor="let challenge of project.challenges">
                  <span class="list-marker">✕</span>
                  {{ challenge }}
                </li>
              </ul>
            </div>

            <div class="glass-card animate-slide-up delay-100" *ngIf="project.solutions?.length">
              <div class="card-header">
                <div class="card-icon card-icon-success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h2>My Solutions</h2>
              </div>
              <ul class="feature-list">
                <li *ngFor="let solution of project.solutions">
                  <span class="list-marker list-marker-success">✓</span>
                  {{ solution }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Key Results -->
          <div class="results-section animate-slide-up delay-200" *ngIf="project.outcomes?.length">
            <div class="section-header">
              <div class="section-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <h2>Key Results & Impact</h2>
            </div>
            <div class="outcomes-grid">
              <div class="outcome-card" *ngFor="let outcome of project.outcomes; let i = index" [style.animation-delay.ms]="i * 100">
                <div class="outcome-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span>{{ outcome }}</span>
              </div>
            </div>
          </div>

          <!-- Responsibilities -->
          <div class="glass-card responsibilities-card animate-slide-up delay-300">
            <div class="card-header">
              <div class="card-icon card-icon-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h2>Key Responsibilities</h2>
            </div>
            <ul class="responsibilities-list">
              <li *ngFor="let resp of project.responsibilities; let i = index" [style.animation-delay.ms]="i * 50">
                <span class="resp-number">{{ (i + 1).toString().padStart(2, '0') }}</span>
                <span class="resp-text">{{ resp }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="tech-section animate-slide-up delay-400">
            <div class="section-header">
              <div class="section-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h2>Technologies Used</h2>
            </div>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tech of project.technology; let i = index" [style.animation-delay.ms]="i * 50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Footer Actions -->
          <footer class="project-footer" *ngIf="project.liveDemoUrl || project.githubUrl">
            <a *ngIf="project.liveDemoUrl" [href]="project.liveDemoUrl" target="_blank" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              Live Demo
            </a>
            <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Source
            </a>
          </footer>
        </section>
      </div>
    </article>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      position: relative;
      padding: var(--space-4xl) 0 var(--space-3xl);
      margin-bottom: var(--space-3xl);
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(var(--rgb-success), 0.08) 0%, transparent 50%, rgba(var(--rgb-creative), 0.05) 100%);
      pointer-events: none;
    }
    .hero-bg::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(var(--rgb-success), 0.1) 0%, transparent 70%);
      animation: pulse-glow 8s ease-in-out infinite;
    }
    @keyframes pulse-glow {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }
    .project-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      background: var(--gradient-home);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: var(--space-md);
      line-height: 1.1;
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
    }
    .link-icon {
      opacity: 0.4;
      stroke: var(--color-success);
      -webkit-text-fill-color: initial;
      transition: all var(--duration-quick) var(--ease-out);
    }
    .project-title:hover .link-icon {
      opacity: 1;
      transform: translate(2px, -2px);
    }
    .project-tagline {
      font-size: var(--text-xl);
      color: var(--color-subtle);
      max-width: 700px;
      line-height: var(--leading-relaxed);
      margin-bottom: var(--space-2xl);
    }

    /* Meta Cards */
    .meta-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: var(--space-md);
    }
    .meta-card {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: var(--space-md) var(--space-lg);
      backdrop-filter: blur(20px);
      transition: all var(--duration-normal) var(--ease-out);
    }
    .meta-card:hover {
      border-color: rgba(var(--rgb-success), 0.3);
      transform: translateY(-3px);
      box-shadow: var(--elevation-2);
    }
    .meta-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(var(--rgb-success), 0.1);
      border-radius: var(--radius-md);
      color: var(--color-success);
      flex-shrink: 0;
    }
    .meta-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .meta-label {
      font-size: var(--text-xs);
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .meta-value {
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--color-neutral);
    }

    /* Glass Cards */
    .glass-card {
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: var(--space-xl);
      backdrop-filter: blur(20px);
      transition: all var(--duration-normal) var(--ease-out);
    }
    .glass-card:hover {
      border-color: rgba(var(--rgb-success), 0.2);
      box-shadow: var(--elevation-3);
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-lg);
    }
    .card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: var(--radius-lg);
      flex-shrink: 0;
    }
    .card-icon-warning {
      background: rgba(255, 180, 50, 0.15);
      color: #f5a623;
    }
    .card-icon-success {
      background: rgba(var(--rgb-success), 0.15);
      color: var(--color-success);
    }
    .card-icon-primary {
      background: rgba(var(--rgb-creative), 0.15);
      color: var(--color-creative);
    }
    .card-header h2 {
      font-size: var(--text-xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin: 0;
    }

    /* Feature List */
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .feature-list li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      padding: var(--space-sm) 0;
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      border-bottom: 1px solid rgba(var(--rgb-border), 0.5);
    }
    .feature-list li:last-child {
      border-bottom: none;
    }
    .list-marker {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background: rgba(255, 100, 100, 0.15);
      color: #ff6b6b;
      border-radius: 50%;
      font-size: 10px;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .list-marker-success {
      background: rgba(var(--rgb-success), 0.15);
      color: var(--color-success);
    }

    /* Content Grid */
    .content-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      margin-bottom: var(--space-2xl);
    }
    @media (max-width: 768px) {
      .content-grid { grid-template-columns: 1fr; }
    }

    /* Section Headers */
    .section-header {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-xl);
    }
    .section-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, rgba(var(--rgb-success), 0.2), rgba(var(--rgb-creative), 0.1));
      border-radius: var(--radius-lg);
      color: var(--color-success);
    }
    .section-header h2 {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin: 0;
    }

    /* Results Section */
    .results-section {
      margin-bottom: var(--space-2xl);
    }
    .outcomes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-md);
    }
    .outcome-card {
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      background: linear-gradient(135deg, rgba(var(--rgb-success), 0.08), rgba(var(--rgb-success), 0.02));
      border: 1px solid rgba(var(--rgb-success), 0.2);
      padding: var(--space-lg);
      border-radius: var(--radius-lg);
      transition: all var(--duration-normal) var(--ease-out);
      animation: fadeInUp 0.5s var(--ease-out) forwards;
      opacity: 0;
    }
    .outcome-card:hover {
      transform: translateY(-4px);
      border-color: rgba(var(--rgb-success), 0.4);
      box-shadow: 0 8px 24px rgba(var(--rgb-success), 0.15);
    }
    .outcome-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: rgba(var(--rgb-success), 0.15);
      border-radius: var(--radius-md);
      color: var(--color-success);
      flex-shrink: 0;
    }
    .outcome-card span:last-child {
      font-size: var(--text-base);
      color: var(--color-neutral);
      font-weight: 500;
      line-height: var(--leading-relaxed);
    }

    /* Responsibilities */
    .responsibilities-card {
      margin-bottom: var(--space-2xl);
    }
    .responsibilities-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: var(--space-sm);
    }
    .responsibilities-list li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      padding: var(--space-md);
      background: rgba(var(--rgb-creative), 0.03);
      border-radius: var(--radius-md);
      transition: all var(--duration-quick) var(--ease-out);
    }
    .responsibilities-list li:hover {
      background: rgba(var(--rgb-creative), 0.08);
      transform: translateX(4px);
    }
    .resp-number {
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      font-weight: 700;
      color: var(--color-creative);
      opacity: 0.7;
      width: 28px;
      flex-shrink: 0;
    }
    .resp-text {
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
    }

    /* Tech Section */
    .tech-section {
      margin-bottom: var(--space-3xl);
    }
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-lg);
    }
    .tech-tag {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      background: rgba(var(--rgb-success), 0.1);
      border: 1px solid rgba(var(--rgb-success), 0.2);
      color: var(--color-success);
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-full);
      font-size: var(--text-sm);
      font-weight: 600;
      transition: all var(--duration-quick) var(--ease-out);
      animation: fadeInUp 0.4s var(--ease-out) forwards;
      opacity: 0;
    }
    .tech-tag:hover {
      background: rgba(var(--rgb-success), 0.2);
      border-color: rgba(var(--rgb-success), 0.4);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 4px 12px rgba(var(--rgb-success), 0.2);
    }
    .tech-tag svg {
      opacity: 0.7;
    }
    .tech-stack-full {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      padding: var(--space-md);
      background: var(--bg-surface);
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: var(--text-sm);
    }
    .tech-label {
      color: var(--color-muted);
    }
    .tech-value {
      color: var(--color-creative);
    }

    /* Footer */
    .project-footer {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
      padding-top: var(--space-2xl);
      border-top: var(--border-subtle);
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-md) var(--space-xl);
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: var(--text-sm);
      transition: all var(--duration-normal) var(--ease-out);
      text-decoration: none;
    }
    .btn-primary {
      background: linear-gradient(135deg, var(--color-success), var(--color-creative));
      color: white;
      box-shadow: 0 4px 16px rgba(var(--rgb-success), 0.3);
    }
    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(var(--rgb-success), 0.4);
    }
    .btn-secondary {
      background: var(--bg-glass);
      border: var(--border-default);
      color: var(--color-neutral);
    }
    .btn-secondary:hover {
      border-color: rgba(var(--rgb-success), 0.3);
      transform: translateY(-3px);
      box-shadow: var(--elevation-2);
    }

    /* Animations */
    .animate-fade-in {
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
    }
    .animate-slide-up {
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 600px) {
      .hero-section { padding: var(--space-2xl) 0; }
      .project-title { font-size: 2rem; }
      .meta-cards { grid-template-columns: 1fr; }
      .outcomes-grid { grid-template-columns: 1fr; }
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-fade-in, .animate-slide-up, .outcome-card, .tech-tag {
        animation: none;
        opacity: 1;
      }
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
