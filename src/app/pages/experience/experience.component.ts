import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience">
      <div class="container">
        <h1 class="page-title animate-fade-in">Professional <span class="text-gradient">Experience</span></h1>
        <p class="page-subtitle animate-fade-in">I have over 10 years of experience building reliable systems and leading successful engineering teams.</p>
        <div class="experience-list">
          @for (exp of portfolioDataService.experience; track exp.company; let i = $index) {
            <div class="experience-card animate-fade-in" [style.animation-delay.ms]="i * 100">
              <div class="exp-header">
                <div class="exp-company">
                  @if (exp.url) {
                    <h2>
                      <a [href]="exp.url" target="_blank" rel="noopener noreferrer" class="external-link">
                        {{ exp.company }}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </h2>
                  } @else {
                    <h2>{{ exp.company }}</h2>
                  }
                  <span class="exp-location">{{ exp.location }}</span>
                </div>
                <div class="exp-meta">
                  <span class="exp-role">{{ exp.title }}</span>
                  <span class="exp-period">{{ exp.period }}</span>
                </div>
              </div>
              <ul class="exp-achievements">
                @for (achievement of exp.achievements; track achievement) {
                  <li>{{ achievement }}</li>
                }
              </ul>
            </div>
          }
        </div>
        <div class="achievements-section animate-fade-in">
          <h2 class="section-subtitle">Key Achievements</h2>
          <div class="achievements-grid">
            @for (achievement of portfolioDataService.achievements; track achievement.metric) {
              <div class="achievement-card">
                <div class="achievement-icon">
                  <svg width="32" height="32"><use [attr.href]="achievement.icon"></use></svg>
                </div>
                <div class="achievement-metric">{{ achievement.metric }}</div>
                <p>{{ achievement.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience { 
      padding-block: var(--space-3xl) var(--space-section);
      min-height: 100vh;
    }
    .container { 
      max-width: 900px;
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
    .experience-list { 
      display: grid;
      gap: var(--space-xl);
      margin-bottom: var(--space-3xl);
    }

    .external-link {
      color: inherit;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all var(--duration-quick) var(--ease-out);
    }

    .external-link:hover {
      color: var(--color-success);
    }

    .link-icon {
      opacity: 0.5;
      transform: translate(-1px, 1px);
      transition: all var(--duration-quick) var(--ease-out);
    }

    .external-link:hover .link-icon {
      opacity: 1;
      transform: translate(0, 0);
      color: var(--color-success);
    }

    .experience-card { 
      background: var(--bg-glass);
      border: var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: var(--space-xl);
      transition: all var(--duration-normal) var(--ease-out);
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
      backdrop-filter: blur(20px);
    }
    .experience-card:hover { 
      border-color: rgba(var(--rgb-success), 0.3);
      transform: translateY(-4px);
      box-shadow: var(--elevation-3), var(--glow-success);
      background: var(--bg-glass);
    }
    .exp-header { 
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: var(--space-md);
      margin-bottom: var(--space-lg);
      padding-bottom: var(--space-md);
      border-bottom: var(--border-subtle);
    }
    .exp-company h2 { 
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin-bottom: var(--space-xs);
    }
    .exp-location { 
      font-size: var(--text-sm);
      color: var(--color-muted);
    }
    .exp-meta { text-align: right; }
    .exp-role { 
      display: block;
      font-size: var(--text-base);
      font-weight: 600;
      color: var(--color-creative);
      margin-bottom: var(--space-xs);
    }
    .exp-period { 
      font-size: var(--text-sm);
      color: var(--color-success);
    }
    .exp-achievements { 
      margin: 0;
      padding-left: var(--space-lg);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
    }
    .exp-achievements li { margin-bottom: var(--space-xs); }
    .exp-achievements li::marker { color: var(--color-success); }
    .section-subtitle { 
      font-size: var(--text-3xl);
      font-weight: 600;
      color: var(--color-creative);
      margin-bottom: var(--space-xl);
      text-align: center;
    }
    .achievements-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-lg);
    }
    .achievement-card { 
      background: var(--bg-glass);
      border: 1px solid rgba(var(--rgb-success), 0.15);
      border-radius: var(--radius-xl);
      padding: var(--space-lg);
      text-align: center;
      transition: all var(--duration-normal) var(--ease-out);
      backdrop-filter: blur(20px);
    }
    .achievement-card:hover { 
      border-color: rgba(var(--rgb-success), 0.3);
      transform: translateY(-5px);
      box-shadow: var(--elevation-3), var(--glow-success);
      background: var(--bg-glass);
    }
    .achievement-icon { 
      margin-bottom: var(--space-xs);
      color: var(--color-success);
    }
    .achievement-icon svg {
      width: 32px;
      height: 32px;
    }
    .achievement-metric { 
      font-size: var(--text-3xl);
      font-weight: 700;
      background: var(--gradient-home);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: var(--space-xs);
    }
    .achievement-card p { 
      color: var(--color-subtle);
      font-size: var(--text-sm);
      line-height: var(--leading-normal);
    }
    .animate-fade-in { 
      animation: fadeInUp 0.6s var(--ease-out) forwards;
      opacity: 0;
    }
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @media (max-width: 600px) {
      .exp-header { flex-direction: column; }
      .exp-meta { text-align: left; }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-in, .experience-card { animation: none; opacity: 1; }
    }
  `]
})
export class ExperienceComponent {
  constructor(public portfolioDataService: PortfolioDataService) { }
}
