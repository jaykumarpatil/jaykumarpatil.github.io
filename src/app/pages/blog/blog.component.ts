import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SeoService } from '../../services/seo.service';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Blog Section -->
    <section class="blog-section" aria-labelledby="blog-heading" role="region">
      <div class="container" id="blog-container">
        <header class="section-header animate-fade-in-up">
          <span class="section-tag">Blog</span>
          <h1 id="blog-heading" class="section-title">
            Thoughts & <span class="text-gradient">Insights</span>
          </h1>
          <p class="section-description">
            Technical deep-dives, best practices, and lessons learned from building enterprise systems
          </p>
        </header>

        <!-- Featured Post -->
        @if (featuredPost) {
          <article 
            id="featured-post-{{featuredPost.id}}"
            class="featured-post card animate-fade-in-up" 
            tabindex="0"
            [routerLink]="['/blog', featuredPost.id]"
            role="article"
            [attr.aria-label]="'Featured: ' + featuredPost.title">
            <div class="featured-content">
              <span class="featured-badge">
                <svg class="featured-icon" width="16" height="16" aria-hidden="true"><use href="#icon-star"></use></svg>
                Featured
              </span>
              <h2 class="featured-title">{{ featuredPost.title }}</h2>
              <p class="featured-description">{{ featuredPost.description }}</p>
              <div class="featured-meta">
                <time class="blog-date" [attr.datetime]="featuredPost.date">{{ formatDate(featuredPost.date) }}</time>
                <span class="meta-divider" aria-hidden="true">•</span>
                <span class="read-time">{{ featuredPost.readTime }}</span>
              </div>
              <div class="featured-tags" role="list" aria-label="Post tags">
                @for (tag of featuredPost.tags; track tag) {
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

        <!-- Blog Grid -->
        <div class="blog-grid" role="list" id="blog-posts-grid">
          @for (post of paginatedPosts; track post.id; let i = $index) {
            <article 
              id="blog-post-{{post.id}}"
              class="blog-card card card-interactive animate-fade-in-up"
              role="listitem"
              tabindex="0"
              [style.animation-delay.ms]="100 + i * 80"
              [routerLink]="['/blog', post.id]"
              [attr.aria-label]="post.title">
              <div class="blog-header">
                <span class="blog-icon" aria-hidden="true">
                  <svg width="24" height="24"><use href="#icon-book"></use></svg>
                </span>
                <div class="blog-meta">
                  <time class="blog-date" [attr.datetime]="post.date">{{ formatDate(post.date) }}</time>
                  <span class="meta-divider" aria-hidden="true">•</span>
                  <span class="read-time">{{ post.readTime }}</span>
                </div>
              </div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-description">{{ post.description }}</p>
              <div class="blog-tags" role="list" aria-label="Tags">
                @for (tag of post.tags.slice(0, 3); track tag) {
                  <span class="tech-tag" role="listitem">{{ tag }}</span>
                }
              </div>
              <div class="blog-cta" aria-hidden="true">
                <span>Read More</span>
                <svg width="16" height="16"><use href="#icon-arrow-right"></use></svg>
              </div>
            </article>
          }
        </div>

        <!-- Pagination Controls -->
        @if (totalPages > 1) {
          <nav class="pagination" aria-label="Blog pagination">
            <button 
              class="pagination-btn" 
              [disabled]="currentPage === 1"
              (click)="setPage(currentPage - 1)"
              aria-label="Previous page">
              <svg width="20" height="20"><use href="#icon-arrow-left"></use></svg>
            </button>
            
            <div class="pagination-pages">
              @for (page of pages; track page) {
                <button 
                  class="page-btn" 
                  [class.active]="page === currentPage"
                  (click)="setPage(page)"
                  [attr.aria-current]="page === currentPage ? 'page' : null">
                  {{ page }}
                </button>
              }
            </div>

            <button 
              class="pagination-btn" 
              [disabled]="currentPage === totalPages"
              (click)="setPage(currentPage + 1)"
              aria-label="Next page">
              <svg width="20" height="20"><use href="#icon-arrow-right"></use></svg>
            </button>
          </nav>
        }

        <!-- Blog CTA -->
        @if (externalBlogUrl) {
          <div class="blog-cta animate-fade-in-up">
            <div class="cta-card card">
              <div class="cta-content">
                <h3>Explore More on My External Blog</h3>
                <p>Dive deeper into topics like Big Data, Hadoop, Spark, and distributed systems on my legacy blog.</p>
              </div>
              <a 
                [href]="externalBlogUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-primary"
                id="visit-external-blog-btn">
                <span>Visit Blog</span>
                <svg width="16" height="16" aria-hidden="true"><use href="#icon-external-link"></use></svg>
              </a>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    /* ===== Blog Section ===== */
    .blog-section {
      padding-block: var(--space-3xl) var(--space-section);
    }

    /* ===== Featured Post ===== */
    .featured-post {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(--space-xl);
      padding: var(--space-xl);
      margin-bottom: var(--space-3xl);
      cursor: pointer;
      transition: all var(--duration-normal) var(--ease-out);
    }

    .featured-post:hover,
    .featured-post:focus-visible {
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

    /* ===== Blog Grid ===== */
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-3xl);
    }

    .blog-card {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      padding: var(--space-lg);
    }

    .blog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .blog-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(200, 245, 66, 0.08);
      border-radius: var(--radius-md);
      color: var(--color-success);
    }

    .blog-meta {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: var(--text-xs);
      color: var(--color-muted);
    }

    .meta-divider {
      opacity: 0.5;
    }

    .blog-title {
      font-size: var(--text-xl);
      font-weight: 600;
      color: var(--color-neutral);
      line-height: var(--leading-snug);
    }

    .blog-description {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-normal);
      flex: 1;
    }

    .blog-tags {
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

    .blog-cta {
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

    .blog-card:hover .blog-cta {
      gap: var(--space-sm);
    }

    /* ===== Pagination ===== */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xl);
      margin-top: var(--space-xl);
      margin-bottom: var(--space-3xl);
    }

    .pagination-pages {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .page-btn, .pagination-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-subtle);
      background: var(--bg-surface);
      color: var(--color-subtle);
      font-size: var(--text-sm);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--duration-quick) var(--ease-out);
    }

    .page-btn:hover, .pagination-btn:hover:not(:disabled) {
      border-color: var(--color-success);
      color: var(--color-success);
      background: rgba(200, 245, 66, 0.05);
    }

    .page-btn.active {
      background: var(--color-success);
      color: var(--bg-base);
      border-color: var(--color-success);
    }

    .pagination-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
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
      .featured-post {
        grid-template-columns: 1fr;
      }

      .featured-visual {
        display: none;
      }

      .blog-grid {
        grid-template-columns: 1fr;
      }

      .blog-cta .cta-card {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class BlogComponent implements OnInit {
  externalBlogUrl = 'https://apachehadoop3.blogspot.com';
  featuredPost: BlogPost | undefined;
  posts: BlogPost[] = [];
  paginatedPosts: BlogPost[] = [];

  // Pagination
  currentPage = 1;
  pageSize = 6;
  totalPages = 1;
  pages: number[] = [];

  constructor(
    public portfolioDataService: PortfolioDataService,
    private seoService: SeoService,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.seoService.setTitle('Blog - Technical Insights & Best Practices');
    this.seoService.setDescription('Technical blogs, tutorials, and insights on DevOps, Cloud Architecture, Microservices, and Enterprise Software Development by Jay Kumar Patil.');
    this.seoService.setKeywords('technical blog, DevOps blogs, cloud architecture, microservices, Kafka, Kubernetes, Spring Boot, Big Data, Hadoop');
    this.seoService.updateCanonicalUrl('https://jaykumarpatil.com/blog');

    // Load posts from service
    this.blogService.getFeaturedPosts().subscribe(featured => {
      this.featuredPost = featured[0];
    });

    this.blogService.getAllPosts().subscribe(posts => {
      this.posts = posts.filter(p => !p.featured);
      this.updatePagination();
    });
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.posts.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedPosts = this.posts.slice(start, end);

    // Scroll to top of grid on page change
    if (this.currentPage > 1) {
      const grid = document.getElementById('blog-posts-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
