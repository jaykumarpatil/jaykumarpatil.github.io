import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SeoService } from '../../services/seo.service';

interface Article {
  title: string;
  description: string;
  url: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Articles Section -->
    <section class="articles-section" aria-labelledby="articles-heading" role="region">
      <div class="container">
        <header class="section-header animate-fade-in-up">
          <span class="section-tag">Articles</span>
          <h1 id="articles-heading" class="section-title">
            Thoughts & <span class="text-gradient">Insights</span>
          </h1>
          <p class="section-description">
            Technical deep-dives, best practices, and lessons learned from building enterprise systems
          </p>
        </header>

        <!-- Featured Article -->
        @if (featuredArticle) {
          <article 
            class="featured-article card animate-fade-in-up" 
            tabindex="0"
            (click)="openArticle(featuredArticle.url)"
            (keydown.enter)="openArticle(featuredArticle.url)"
            role="article"
            [attr.aria-label]="'Featured: ' + featuredArticle.title">
            <div class="featured-content">
              <span class="featured-badge">
                <svg class="featured-icon" width="16" height="16" aria-hidden="true"><use href="#icon-star"></use></svg>
                Featured
              </span>
              <h2 class="featured-title">{{ featuredArticle.title }}</h2>
              <p class="featured-description">{{ featuredArticle.description }}</p>
              <div class="featured-meta">
                <time class="article-date" [attr.datetime]="featuredArticle.date">{{ formatDate(featuredArticle.date) }}</time>
                <span class="meta-divider" aria-hidden="true">•</span>
                <span class="read-time">{{ featuredArticle.readTime }}</span>
              </div>
              <div class="featured-tags" role="list" aria-label="Article tags">
                @for (tag of featuredArticle.tags; track tag) {
                  <span class="tech-tag" role="listitem">{{ tag }}</span>
                }
              </div>
            </div>
            <div class="featured-visual" aria-hidden="true">
              <div class="visual-gradient"></div>
              <svg class="visual-icon" width="80" height="80"><use href="#icon-book"></use></svg>
            </div>
          </article>
        }

        <!-- Articles Grid -->
        <div class="articles-grid" role="list">
          @for (article of articles; track article.title; let i = $index) {
            <article 
              class="article-card card card-interactive animate-fade-in-up"
              role="listitem"
              tabindex="0"
              [style.animation-delay.ms]="100 + i * 80"
              (click)="openArticle(article.url)"
              (keydown.enter)="openArticle(article.url)"
              [attr.aria-label]="article.title">
              <div class="article-header">
                <span class="article-icon" aria-hidden="true">
                  <svg width="24" height="24"><use href="#icon-book"></use></svg>
                </span>
                <div class="article-meta">
                  <time class="article-date" [attr.datetime]="article.date">{{ formatDate(article.date) }}</time>
                  <span class="meta-divider" aria-hidden="true">•</span>
                  <span class="read-time">{{ article.readTime }}</span>
                </div>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-description">{{ article.description }}</p>
              <div class="article-tags" role="list" aria-label="Tags">
                @for (tag of article.tags.slice(0, 3); track tag) {
                  <span class="tech-tag" role="listitem">{{ tag }}</span>
                }
              </div>
              <div class="article-cta" aria-hidden="true">
                <span>Read Article</span>
                <svg width="16" height="16"><use href="#icon-arrow-right"></use></svg>
              </div>
            </article>
          }
        </div>

        <!-- Blog CTA -->
        <div class="blog-cta animate-fade-in-up">
          <div class="cta-card card">
            <div class="cta-content">
              <h3>Explore More on My Blog</h3>
              <p>Dive deeper into topics like Big Data, Hadoop, Spark, and distributed systems.</p>
            </div>
            <a 
              [href]="blogUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-primary">
              <span>Visit Blog</span>
              <svg width="16" height="16" aria-hidden="true"><use href="#icon-external-link"></use></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== Articles Section ===== */
    .articles-section {
      padding-block: var(--space-3xl) var(--space-section);
    }

    /* ===== Featured Article ===== */
    .featured-article {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(--space-xl);
      padding: var(--space-xl);
      margin-bottom: var(--space-3xl);
      cursor: pointer;
      transition: all var(--duration-normal) var(--ease-out);
    }

    .featured-article:hover,
    .featured-article:focus-visible {
      border-color: rgba(200, 245, 66, 0.3);
      transform: translateY(-4px);
      box-shadow: var(--elevation-3), var(--glow-success);
    }

    .featured-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .featured-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      width: fit-content;
      padding: 6px var(--space-sm);
      background: rgba(200, 245, 66, 0.12);
      color: var(--color-success);
      font-size: var(--text-xs);
      font-weight: 600;
      border-radius: var(--radius-full);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .featured-icon {
      width: 14px;
      height: 14px;
    }

    .featured-title {
      font-size: var(--text-3xl);
      font-weight: 700;
      color: var(--color-neutral);
      line-height: var(--leading-tight);
    }

    .featured-description {
      font-size: var(--text-lg);
      color: var(--color-subtle);
      max-width: 50ch;
    }

    .featured-meta {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: var(--text-sm);
      color: var(--color-muted);
    }

    .featured-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: var(--space-sm);
    }

    .featured-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 180px;
      border-radius: var(--radius-xl);
      overflow: hidden;
    }

    .visual-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(200, 245, 66, 0.1), rgba(34, 211, 238, 0.08));
    }

    .visual-icon {
      position: relative;
      color: var(--color-success);
      opacity: 0.6;
    }

    /* ===== Articles Grid ===== */
    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-3xl);
    }

    .article-card {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding: var(--space-lg);
    }

    .article-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .article-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(200, 245, 66, 0.08);
      border-radius: var(--radius-md);
      color: var(--color-success);
    }

    .article-meta {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: var(--text-xs);
      color: var(--color-muted);
    }

    .meta-divider {
      opacity: 0.5;
    }

    .article-title {
      font-size: var(--text-xl);
      font-weight: 600;
      color: var(--color-neutral);
      line-height: var(--leading-snug);
    }

    .article-description {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-normal);
      flex: 1;
    }

    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
    }

    .tech-tag {
      padding: 4px var(--space-xs);
      background: rgba(255, 255, 255, 0.04);
      color: var(--color-subtle);
      font-size: var(--text-xs);
      border-radius: var(--radius-sm);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .article-cta {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--color-success);
      margin-top: auto;
      padding-top: var(--space-sm);
      border-top: var(--border-subtle);
      transition: gap var(--duration-quick) var(--ease-out);
    }

    .article-card:hover .article-cta {
      gap: var(--space-sm);
    }

    /* ===== Blog CTA ===== */
    .blog-cta .cta-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xl);
      padding: var(--space-xl);
      background: linear-gradient(135deg, rgba(200, 245, 66, 0.06), rgba(34, 211, 238, 0.04));
      border-color: rgba(200, 245, 66, 0.15);
    }

    .cta-content h3 {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin-bottom: var(--space-xs);
    }

    .cta-content p {
      font-size: var(--text-base);
      color: var(--color-subtle);
    }

    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      .featured-article {
        grid-template-columns: 1fr;
      }

      .featured-visual {
        display: none;
      }

      .articles-grid {
        grid-template-columns: 1fr;
      }

      .blog-cta .cta-card {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class ArticlesComponent implements OnInit {
  blogUrl = 'https://apachehadoop3.blogspot.com';

  featuredArticle: Article = {
    title: 'Building Scalable Data Pipelines with Apache Kafka and Spring Boot',
    description: 'A comprehensive guide to designing and implementing high-throughput, fault-tolerant data pipelines for enterprise applications using Apache Kafka integrated with Spring Boot microservices.',
    url: 'https://apachehadoop3.blogspot.com',
    date: '2024-12-15',
    readTime: '12 min read',
    tags: ['Kafka', 'Spring Boot', 'Microservices', 'Data Engineering'],
    featured: true
  };

  articles: Article[] = [
    {
      title: 'CI/CD Best Practices for Kubernetes Deployments',
      description: 'Learn how to set up robust CI/CD pipelines for Kubernetes using Jenkins, GitOps patterns, and Helm charts.',
      url: 'https://apachehadoop3.blogspot.com',
      date: '2024-11-28',
      readTime: '8 min read',
      tags: ['Kubernetes', 'CI/CD', 'DevOps']
    },
    {
      title: 'Observability Stack: Prometheus, Grafana, and Micrometer',
      description: 'Setting up comprehensive monitoring and observability for Spring Boot microservices with actionable dashboards.',
      url: 'https://apachehadoop3.blogspot.com',
      date: '2024-10-15',
      readTime: '10 min read',
      tags: ['Observability', 'Prometheus', 'Grafana']
    },
    {
      title: 'Hadoop Ecosystem: A Deep Dive into Big Data Processing',
      description: 'Understanding the core components of the Hadoop ecosystem and when to use each tool for your data processing needs.',
      url: 'https://apachehadoop3.blogspot.com',
      date: '2024-09-20',
      readTime: '15 min read',
      tags: ['Hadoop', 'Big Data', 'HDFS']
    },
    {
      title: 'Performance Tuning Spring Boot Applications',
      description: 'Practical techniques to optimize Spring Boot applications for high-traffic environments, from JVM tuning to caching strategies.',
      url: 'https://apachehadoop3.blogspot.com',
      date: '2024-08-10',
      readTime: '9 min read',
      tags: ['Spring Boot', 'Performance', 'Java']
    },
    {
      title: 'Docker and Container Security Best Practices',
      description: 'Essential security practices for containerized applications including image scanning, runtime security, and network policies.',
      url: 'https://apachehadoop3.blogspot.com',
      date: '2024-07-05',
      readTime: '7 min read',
      tags: ['Docker', 'Security', 'Containers']
    }
  ];

  constructor(
    public portfolioDataService: PortfolioDataService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.setTitle('Articles - Technical Insights & Best Practices');
    this.seoService.setDescription('Technical articles, tutorials, and insights on DevOps, Cloud Architecture, Microservices, and Enterprise Software Development by Jay Kumar Patil.');
    this.seoService.setKeywords('technical blog, DevOps articles, cloud architecture, microservices, Kafka, Kubernetes, Spring Boot, Big Data, Hadoop');
    this.seoService.updateCanonicalUrl('https://jaykumarpatil.github.io/articles');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  openArticle(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
