import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills">
      <div class="container">
        <h1 class="page-title animate-fade-in">Technical <span class="text-gradient">Skills</span></h1>
        <div class="skills-grid">
          @for (skillGroup of portfolioDataService.skills; track skillGroup.category; let i = $index) {
            <div class="skill-category animate-fade-in" [style.animation-delay.ms]="i * 100">
              <h2 class="category-title">{{ skillGroup.category }}</h2>
              <div class="skills-list">
                @for (skill of skillGroup.items; track skill.name) {
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-level">{{ skill.proficiency }}%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" [style.width.%]="skill.proficiency" [class]="getSkillClass(skill.proficiency)"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
        <div class="certifications-section animate-fade-in">
          <h2 class="section-subtitle">Certifications & Expertise</h2>
          <div class="cert-grid">
            <div class="cert-card">
              <div class="cert-icon">☁️</div>
              <h3>Cloud Platforms</h3>
              <p>AWS, Azure, GCP certified</p>
            </div>
            <div class="cert-card">
              <div class="cert-icon">🔧</div>
              <h3>DevOps</h3>
              <p>CI/CD, Docker, Kubernetes</p>
            </div>
            <div class="cert-card">
              <div class="cert-icon">🏗️</div>
              <h3>Architecture</h3>
              <p>Microservices, Event-Driven</p>
            </div>
            <div class="cert-card">
              <div class="cert-icon">🤖</div>
              <h3>AI/ML</h3>
              <p>OpenAI, LangChain, RAG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills { 
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
    .skills-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-xl);
      margin-bottom: var(--space-3xl);
    }
    .skill-category { 
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: var(--space-xl);
      transition: all var(--duration-normal) var(--ease-out);
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
      backdrop-filter: blur(20px);
    }
    .skill-category:hover { 
      border-color: rgba(200, 245, 66, 0.2);
    }
    .category-title { 
      font-size: var(--text-xl);
      font-weight: 600;
      color: var(--color-creative);
      margin-bottom: var(--space-lg);
      padding-bottom: var(--space-sm);
      border-bottom: var(--border-subtle);
    }
    .skills-list { 
      display: grid;
      gap: var(--space-md);
    }
    .skill-header { 
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-xs);
    }
    .skill-name { 
      font-size: var(--text-base);
      font-weight: 500;
      color: var(--color-neutral);
    }
    .skill-level { 
      font-size: var(--text-sm);
      color: var(--color-success);
      font-weight: 600;
    }
    .skill-bar { 
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }
    .skill-progress { 
      height: 100%;
      border-radius: 3px;
      transition: width 1s var(--ease-out);
    }
    .skill-progress.expert { background: var(--gradient-home); }
    .skill-progress.advanced { background: linear-gradient(90deg, var(--color-creative), var(--color-success)); }
    .skill-progress.intermediate { background: var(--color-creative); }
    .section-subtitle { 
      font-size: var(--text-3xl);
      font-weight: 600;
      color: var(--color-creative);
      margin-bottom: var(--space-xl);
      text-align: center;
    }
    .cert-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: var(--space-lg);
    }
    .cert-card { 
      background: var(--bg-glass);
      border: 1px solid rgba(200, 245, 66, 0.15);
      border-radius: var(--radius-xl);
      padding: var(--space-lg);
      text-align: center;
      transition: all var(--duration-normal) var(--ease-out);
      backdrop-filter: blur(20px);
    }
    .cert-card:hover { 
      border-color: rgba(200, 245, 66, 0.4);
      transform: translateY(-5px);
      box-shadow: var(--elevation-3);
    }
    .cert-icon { 
      font-size: var(--text-4xl);
      margin-bottom: var(--space-md);
    }
    .cert-card h3 { 
      font-size: var(--text-lg);
      font-weight: 600;
      color: var(--color-neutral);
      margin-bottom: var(--space-xs);
    }
    .cert-card p { 
      color: var(--color-subtle);
      font-size: var(--text-sm);
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
      .skills-grid { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-in, .skill-category { animation: none; opacity: 1; }
      .skill-progress { transition: none; }
    }
  `]
})
export class SkillsComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}

  getSkillClass(proficiency: number): string {
    if (proficiency >= 85) return 'expert';
    if (proficiency >= 70) return 'advanced';
    return 'intermediate';
  }
}
