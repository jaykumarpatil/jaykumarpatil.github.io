import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animated-progress-bar',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: '0%' }),
        animate('1s ease-out', style({ width: '{{value}}%' }))
      ])
    ])
  ],
  template: `
    <div class="progress-container">
      <div class="progress-label">
        <span>{{ name }}</span>
        <span>{{ value }}%</span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          [@progressAnimation]="{value: value, params: {value: value}}"
          [style.background-color]="getColorForValue(value)">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress-container {
      margin-bottom: 1rem;
      width: 100%;
    }
    
    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #475569;
      transition: color 0.3s ease;
    }
    
    :host-context(.dark-mode) .progress-label {
      color: #94a3b8;
    }
    
    .progress-bar {
      height: 8px;
      background-color: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      transition: background-color 0.3s ease;
    }
    
    :host-context(.dark-mode) .progress-bar {
      background-color: #334155;
    }
    
    .progress-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 1s ease-out;
    }
  `]
})
export class AnimatedProgressBarComponent {
  @Input() name = '';
  @Input() value = 0;
  
  getColorForValue(value: number): string {
    if (value >= 90) {
      return '#10b981'; // Green for excellent skills
    } else if (value >= 75) {
      return '#3b82f6'; // Blue for good skills
    } else if (value >= 60) {
      return '#f59e0b'; // Amber for average skills
    } else {
      return '#ef4444'; // Red for beginner skills
    }
  }
}
