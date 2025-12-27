import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Home Section - Single Focal Point -->
    <section class="home" aria-labelledby="home-heading" role="region">
      <div class="home-ambient" aria-hidden="true">
        <div class="orb orb-primary"></div>
        <div class="orb orb-secondary"></div>
      </div>
      
      <div class="container home-grid">
        <!-- Home Content - Text First for Accessibility -->
        <div class="home-content">
          <div class="status-badge animate-fade-in" role="status">
            <span class="status-indicator" aria-hidden="true"></span>
            <span>Available for opportunities</span>
          </div>
          
          <h1 id="home-heading" class="home-title animate-fade-in-up delay-100">
            Building <span class="text-gradient">Scalable</span> 
            <br>Digital Solutions
          </h1>
          
          <p class="home-description animate-fade-in-up delay-200">
            {{ portfolioDataService.profile.summary }}
          </p>
          
          <!-- Micro-CTAs -->
          <div class="home-actions animate-fade-in-up delay-300">
            <a routerLink="/projects" class="btn btn-primary" aria-describedby="cta-description">
              <span>View Projects</span>
              <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow-right"></use></svg>
            </a>
            <a routerLink="/contact" class="btn btn-secondary">
              <span>Get in Touch</span>
            </a>
            <span id="cta-description" class="sr-only">View my portfolio of enterprise projects</span>
          </div>
          
          <!-- Impact Metrics as Badges -->
          <div class="metrics-row animate-fade-in-up delay-400" role="list" aria-label="Key achievements">
            @for (achievement of portfolioDataService.achievements.slice(0, 3); track achievement.metric) {
              <div class="metric-badge" role="listitem">
                <span class="metric-value">{{ achievement.metric }}</span>
                <span class="metric-label">{{ achievement.description }}</span>
              </div>
            }
          </div>
        </div>
        
        <!-- Home Visual -->
        <div class="home-visual animate-scale-in delay-200" aria-hidden="true">
          <div class="profile-card">
            <div class="profile-image">
              <img 
                [src]="portfolioDataService.profile.profileImage" 
                [alt]="'Portrait of ' + portfolioDataService.profile.name"
                width="300"
                height="360"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div class="profile-accent"></div>
          </div>
          
          <!-- Floating Elements -->
          <div class="float-element float-1 animate-float">
            <svg class="float-icon" width="20" height="20" aria-hidden="true"><use href="#icon-bolt"></use></svg>
            <span>10+ Years</span>
          </div>
          <div class="float-element float-2 animate-float" style="animation-delay: 1s">
            <svg class="float-icon" width="20" height="20" aria-hidden="true"><use href="#icon-globe"></use></svg>
            <span>Enterprise</span>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-cue" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- About Section - Curated Storytelling -->
    <section class="section-about" aria-labelledby="about-heading" role="region">
      <div class="container">
        <header class="section-header animate-fade-in-up">
          <span class="section-tag">About</span>
          <h2 id="about-heading" class="section-title">
            Passionate about <span class="text-gradient">engineering excellence</span>
          </h2>
        </header>
        
        <div class="about-layout">
          <div class="about-narrative animate-fade-in-up delay-100">
            <p class="lead-text">{{ portfolioDataService.profile.shortGoal }}</p>
            
            <!-- Value Propositions as Cards -->
            <div class="value-grid" role="list">
              @for (bullet of portfolioDataService.valueBullets; track bullet.text; let i = $index) {
                <article class="value-card" role="listitem">
                  <div class="value-icon" aria-hidden="true">
                    @switch (i) {
                      @case (0) {
                        <svg viewBox="0 0 24 24"><use href="#icon-monitor"></use></svg>
                      }
                      @case (1) {
                        <svg viewBox="0 0 24 24"><use href="#icon-cloud"></use></svg>
                      }
                      @case (2) {
                        <svg viewBox="0 0 24 24"><use href="#icon-settings"></use></svg>
                      }
                      @default {
                        <svg viewBox="0 0 24 24"><use href="#icon-bolt"></use></svg>
                      }
                    }
                  </div>
                  <div class="value-body">
                    <p>{{ bullet.text }}</p>
                  </div>
                </article>
              }
            </div>
            
            <a routerLink="/about" class="link-cta">
              Learn more about my journey
              <svg aria-hidden="true" width="18" height="18"><use href="#icon-arrow-right"></use></svg>
            </a>
          </div>
          
          <aside class="about-sidebar animate-fade-in-up delay-200" aria-label="Technical skills">
            <div class="skills-cloud">
              @for (skill of getTopSkills(); track skill) {
                <span class="skill-tag">{{ skill }}</span>
              }
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Projects Section - Portfolio Grid -->
    <section class="section-projects" aria-labelledby="projects-heading" role="region">
      <div class="container">
        <header class="section-header animate-fade-in-up">
          <span class="section-tag">Portfolio</span>
          <h2 id="projects-heading" class="section-title">
            Featured <span class="text-gradient">Projects</span>
          </h2>
          <p class="section-description">Enterprise solutions delivering measurable business impact</p>
        </header>
        
        <div class="projects-grid" role="list">
          @for (project of portfolioDataService.projects.slice(0, 4); track project.name; let i = $index) {
            <a 
              routerLink="/projects"
              class="project-card card-interactive animate-fade-in-up" 
              role="listitem"
              [style.animation-delay.ms]="100 + i * 80"
              [attr.aria-label]="project.name + ' - ' + project.client"
            >
              <div class="project-thumbnail" aria-hidden="true">
                <span class="project-icon">
                  @switch (i) {
                    @case (0) {
                      <svg viewBox="0 0 24 24"><use href="#icon-rocket"></use></svg>
                    }
                    @case (1) {
                      <svg viewBox="0 0 24 24"><use href="#icon-bolt"></use></svg>
                    }
                    @case (2) {
                      <svg viewBox="0 0 24 24"><use href="#icon-globe"></use></svg>
                    }
                    @default {
                      <svg viewBox="0 0 24 24"><use href="#icon-chart"></use></svg>
                    }
                  }
                </span>
              </div>
              <div class="project-body">
                <div class="project-meta">
                  <span class="project-client">{{ project.client }}</span>
                  <time class="project-date">{{ project.period }}</time>
                </div>
                <h3 class="project-title">{{ project.name }}</h3>
                <p class="project-summary">{{ project.impactSummary }}</p>
                <div class="project-tags" aria-label="Technologies used">
                  @for (tag of project.tags.slice(0, 3); track tag) {
                    <span class="tech-tag">{{ tag }}</span>
                  }
                </div>
              </div>
              <div class="project-hover-cta" aria-hidden="true">
                <span class="cta-text">View Details</span>
              </div>
            </a>
          }
        </div>
        
        <div class="section-footer animate-fade-in-up">
          <a routerLink="/projects" class="btn btn-secondary">
            View All Projects
            <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow-right"></use></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-cta" aria-labelledby="cta-heading" role="region">
      <div class="container">
        <div class="cta-card animate-fade-in-up">
          <header class="cta-header">
            <span class="section-tag">Let's Connect</span>
            <h2 id="cta-heading">Have a project in mind?</h2>
            <p>I'm always interested in discussing new opportunities and challenges.</p>
          </header>
          <a routerLink="/contact" class="btn btn-primary btn-lg">
            Start a Conversation
            <svg aria-hidden="true" width="18" height="18"><use href="#icon-arrow-right"></use></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== Home Section ===== */
    .home {
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      align-items: center;
      position: relative;
      padding: var(--space-4xl) 0 var(--space-2xl);
      overflow: hidden;
    }
    
    .home-ambient {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }
    
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.5;
    }
    
    .orb-primary {
      width: min(50vw, 500px);
      height: min(50vw, 500px);
      background: radial-gradient(circle, rgba(200, 245, 66, 0.12) 0%, transparent 70%);
      top: -15%;
      right: -5%;
      animation: float 10s ease-in-out infinite;
    }
    
    .orb-secondary {
      width: min(35vw, 350px);
      height: min(35vw, 350px);
      background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
      bottom: 10%;
      left: -5%;
      animation: float 12s ease-in-out infinite reverse;
    }
    
    .home-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
    }
    
    /* Status Badge */
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      padding: 6px var(--space-sm) 6px 8px;
      background: rgba(200, 245, 66, 0.08);
      border: 1px solid rgba(200, 245, 66, 0.15);
      border-radius: var(--radius-full);
      font-size: var(--text-sm);
      color: var(--color-success);
      margin-bottom: var(--space-lg);
    }
    
    .status-indicator {
      width: 8px;
      height: 8px;
      background: var(--color-success);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    
    /* Home Title */
    .home-title {
      font-size: var(--text-5xl);
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -0.03em;
      margin-bottom: var(--space-xl);
    }
    
    .home-description {
      font-size: var(--text-lg);
      color: var(--color-subtle);
      line-height: 1.7;
      max-width: 48ch;
      margin-bottom: var(--space-2xl);
    }
    
    /* Home Actions */
    .home-actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
      margin-bottom: var(--space-3xl);
    }
    
    /* Metrics Row */
    .metrics-row {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2xl);
    }
    
    .metric-badge {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .metric-value {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-neutral);
    }
    
    .metric-label {
      font-size: var(--text-xs);
      color: var(--color-muted);
    }
    
    /* Home Visual */
    .home-visual {
      position: relative;
      display: flex;
      justify-content: center;
    }
    
    .profile-card {
      position: relative;
      width: 280px;
      height: 340px;
      border-radius: var(--radius-2xl);
      overflow: hidden;
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
    }
    
    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .profile-accent {
      position: absolute;
      inset: -3px;
      background: linear-gradient(135deg, rgba(200, 245, 66, 0.4), transparent 50%, rgba(34, 211, 238, 0.3));
      border-radius: inherit;
      z-index: -1;
      filter: blur(15px);
      opacity: 0.7;
    }
    
    /* Floating Elements */
    .float-element {
      position: absolute;
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      padding: 10px var(--space-md);
      background: var(--bg-overlay);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-lg);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--color-neutral);
    }
    
    .float-1 { top: 15%; left: -20%; }
    .float-2 { bottom: 20%; right: -15%; }
    
    .float-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: var(--color-success);
    }

    .float-icon svg {
      width: 20px;
      height: 20px;
    }
    
    /* Scroll Cue */
    .scroll-cue {
      position: absolute;
      bottom: var(--space-2xl);
      left: 50%;
      transform: translateX(-50%);
    }
    
    .scroll-line {
      width: 1px;
      height: 48px;
      background: linear-gradient(180deg, var(--color-success), transparent);
      opacity: 0.6;
    }
    
    /* ===== About Section ===== */
    .section-about {
      padding: var(--space-section) 0;
      background: var(--gradient-surface);
    }
    
    .about-layout {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: var(--space-3xl);
      align-items: start;
    }
    
    .lead-text {
      font-size: var(--text-lg);
      color: var(--color-subtle);
      line-height: 1.8;
      margin-bottom: var(--space-2xl);
    }
    
    /* Value Grid */
    .value-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      margin-bottom: var(--space-2xl);
    }
    
    .value-card {
      display: flex;
      gap: var(--space-md);
      padding: var(--space-lg);
      background: var(--bg-glass);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: var(--radius-xl);
      transition: all var(--duration-normal) var(--ease-out);
    }
    
    .value-card:hover {
      border-color: rgba(200, 245, 66, 0.2);
      transform: translateX(6px);
    }
    
    .value-icon {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(200, 245, 66, 0.1);
      border-radius: var(--radius-lg);
      flex-shrink: 0;
      color: var(--color-success);
    }

    .value-icon svg {
      width: 24px;
      height: 24px;
    }
    
    .value-body p {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: 1.6;
    }
    
    /* Link CTA */
    .link-cta {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      color: var(--color-success);
      font-weight: 500;
      font-size: var(--text-sm);
      transition: gap var(--duration-quick) var(--ease-out);
    }
    
    .link-cta:hover {
      gap: var(--space-sm);
    }
    
    /* Skills Cloud */
    .skills-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      padding: var(--space-xl);
      background: var(--bg-glass);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: var(--radius-2xl);
    }
    
    .skill-tag {
      padding: 8px var(--space-md);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: var(--radius-md);
      font-size: var(--text-sm);
      color: var(--color-subtle);
      transition: all var(--duration-quick) var(--ease-out);
    }
    
    .skill-tag:hover {
      border-color: rgba(200, 245, 66, 0.3);
      color: var(--color-success);
    }
    
    /* ===== Projects Section ===== */
    .section-projects {
      padding: var(--space-section) 0;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
    }
    
    .project-card {
      position: relative;
      display: block;
      text-decoration: none;
      color: inherit;
      background: var(--bg-glass);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: var(--radius-2xl);
      overflow: hidden;
      transition: all var(--duration-normal) var(--ease-out);
      cursor: pointer;
    }
    
    .project-card:hover,
    .project-card:focus-visible {
      border-color: rgba(200, 245, 66, 0.2);
      transform: translateY(-6px);
      box-shadow: var(--elevation-4);
    }
    
    .project-thumbnail {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(200, 245, 66, 0.04), rgba(34, 211, 238, 0.04));
    }
    
    .project-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-success);
      opacity: 0.8;
      transition: transform var(--duration-normal) var(--ease-out);
    }

    .project-icon svg {
      width: 56px;
      height: 56px;
    }
    
    .project-card:hover .project-icon {
      transform: scale(1.1);
    }
    
    .project-body {
      padding: var(--space-xl);
    }
    
    .project-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-md);
    }
    
    .project-client,
    .project-date {
      font-size: var(--text-xs);
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    
    .project-title {
      font-size: var(--text-lg);
      font-weight: 600;
      margin-bottom: var(--space-sm);
    }
    
    .project-summary {
      font-size: var(--text-sm);
      color: var(--color-muted);
      line-height: 1.6;
      margin-bottom: var(--space-lg);
    }
    
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
    
    .tech-tag {
      padding: 4px 10px;
      background: rgba(200, 245, 66, 0.08);
      color: var(--color-success);
      font-size: 0.6875rem;
      border-radius: var(--radius-full);
    }
    
    .project-hover-cta {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(5, 5, 7, 0.85);
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--duration-normal) var(--ease-out);
    }
    
    .project-card:hover .project-hover-cta,
    .project-card:focus-visible .project-hover-cta {
      opacity: 1;
    }
    
    .cta-text {
      padding: 10px var(--space-lg);
      background: var(--color-success);
      color: var(--bg-base);
      font-size: var(--text-sm);
      font-weight: 600;
      border-radius: var(--radius-full);
    }
    
    .section-footer {
      text-align: center;
      margin-top: var(--space-3xl);
    }
    
    /* ===== CTA Section ===== */
    .section-cta {
      padding: var(--space-section) 0;
    }
    
    .cta-card {
      text-align: center;
      padding: var(--space-4xl) var(--space-xl);
      background: linear-gradient(135deg, rgba(200, 245, 66, 0.05), rgba(34, 211, 238, 0.03));
      border: 1px solid rgba(200, 245, 66, 0.15);
      border-radius: var(--radius-2xl);
    }
    
    .cta-header {
      margin-bottom: var(--space-2xl);
    }
    
    .cta-header h2 {
      font-size: var(--text-4xl);
      margin-bottom: var(--space-md);
    }
    
    .cta-header p {
      color: var(--color-muted);
      max-width: 40ch;
      margin: 0 auto;
    }
    
    /* ===== Responsive ===== */
    @media (max-width: 1024px) {
      .home-grid {
        grid-template-columns: 1fr;
        text-align: center;
        gap: var(--space-3xl);
      }
      
      .home-content { order: 1; }
      .home-visual { order: 0; }
      
      .home-actions { justify-content: center; }
      .metrics-row { justify-content: center; }
      .home-description { margin-inline: auto; }
      
      .about-layout { grid-template-columns: 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      
      .float-element { display: none; }
    }
    
    @media (max-width: 640px) {
      .home {
        min-height: auto;
        padding: var(--space-3xl) 0;
      }
      
      .profile-card {
        width: 220px;
        height: 280px;
      }
      
      .metrics-row {
        gap: var(--space-xl);
      }
      
      .metric-badge {
        flex: 1;
        min-width: 80px;
        text-align: center;
      }
      
      .cta-card {
        padding: var(--space-3xl) var(--space-lg);
      }
    }
    
    /* ===== Animation Keyframes ===== */
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor(
    public portfolioDataService: PortfolioDataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setPageSeo({
      title: undefined,
      description: this.portfolioDataService.profile.summary,
      keywords: 'Jay Kumar Patil, Senior Engineering Lead, DevOps, Cloud Architecture, Full Stack Developer, Enterprise Solutions',
      ogType: 'website',
      jsonLd: this.seoService.getPersonSchema()
    });
  }
  
  getTopSkills(): string[] {
    const allSkills: string[] = [];
    this.portfolioDataService.skills.forEach(category => {
      category.items.slice(0, 2).forEach(item => allSkills.push(item.name));
    });
    return allSkills.slice(0, 12);
  }
}
