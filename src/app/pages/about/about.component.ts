import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="profile-image">
            <img [src]="aboutData.profileImage" alt="Profile Picture" *ngIf="aboutData.profileImage">
          </div>
          <div class="about-text">
            <h3>{{ aboutData.name }}</h3>
            <h4>{{ aboutData.title }}</h4>
            <p>{{ aboutData.description }}</p>
            
            <div class="personal-info">
              <div class="info-item" *ngFor="let item of aboutData.personalInfo">
                <strong>{{ item.label }}:</strong> {{ item.value }}
              </div>
            </div>

            <div class="social-links" *ngIf="aboutData.socialLinks">
              <a [href]="link.url" target="_blank" *ngFor="let link of aboutData.socialLinks">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
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

    .about-content {
      display: flex;
      gap: 50px;
      align-items: flex-start;
    }

    .profile-image {
      flex: 0 0 300px;
    }

    .profile-image img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .about-text {
      flex: 1;
    }

    .about-text h3 {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #333;
    }

    .about-text h4 {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 20px;
    }

    .about-text p {
      line-height: 1.8;
      margin-bottom: 30px;
      color: #555;
    }

    .personal-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .info-item {
      padding: 10px;
      background-color: white;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .social-links {
      display: flex;
      gap: 20px;
    }

    .social-links a {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .social-links a:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      .about-content {
        flex-direction: column;
      }

      .profile-image {
        flex: 0 0 auto;
        max-width: 250px;
        margin: 0 auto 30px;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  aboutData: {
    profileImage?: string;
    name: string;
    title: string;
    description: string;
    personalInfo: Array<{label: string; value: string}>;
    socialLinks?: Array<{name: string; url: string}>;
  } = {
    name: 'Jay Kumar Patil',
    title: 'Full Stack Developer',
    description: 'Passionate Full Stack Developer with expertise in Angular, Spring Boot, and cloud technologies. Experienced in building scalable web applications and implementing efficient solutions.',
    personalInfo: [
      { label: 'Experience', value: '5+ years' },
      { label: 'Location', value: 'Bengaluru, India' },
      { label: 'Email', value: 'jaykumarpatil@gmail.com' },
      { label: 'Availability', value: 'Open to opportunities' }
    ],
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/jaykumarpatil' },
      { name: 'GitHub', url: 'https://github.com/jaykumarpatil' }
    ]
  };

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    // You can fetch data from the PortfolioDataService if needed
    // this.portfolioDataService.getAboutData().subscribe(data => {
    //   this.aboutData = data;
    // });
  }
}