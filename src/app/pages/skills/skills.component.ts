import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedProgressBarComponent } from '../../components/animated-progress-bar/animated-progress-bar.component';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AnimatedProgressBarComponent],
  template: `
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-container">
          <div class="skill-category" *ngFor="let category of portfolioDataService.skills">
            <h3 class="category-title">{{ category.category }}</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.items">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.proficiency }}%</span>
                </div>
                <app-animated-progress-bar [name]="skill.name" [value]="skill.proficiency"></app-animated-progress-bar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
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

    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .skill-category {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .category-title {
      color: #2563eb;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .skill-item {
      width: 100%;
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    .skill-name {
      font-weight: 500;
      color: #333;
    }

    .skill-percentage {
      color: #666;
    }

    @media (max-width: 768px) {
      .skills-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  constructor(public portfolioDataService: PortfolioDataService) {}
}