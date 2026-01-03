import { Component, OnInit, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';
import { SeoService } from '../../services/seo.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (post) {
      <article class="blog-detail" itemscope itemtype="https://schema.org/Article">
        <!-- Blog Header -->
        <header class="blog-header">
          <div class="container">
            <div class="breadcrumb animate-fade-in">
              <a routerLink="/blog" class="btn-pill btn-pill-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                <span>Back to Blog</span>
              </a>
            </div>

            <div class="blog-meta-header">
              <time class="blog-date" [attr.datetime]="post.date" itemprop="datePublished">
                {{ formatDate(post.date) }}
              </time>
              <span class="meta-divider" aria-hidden="true">•</span>
              <span class="read-time">{{ post.readTime }}</span>
            </div>

            <h1 class="blog-title" itemprop="headline">{{ post.title }}</h1>
            
            <p class="blog-description" itemprop="description">{{ post.description }}</p>

            <div class="blog-tags" role="list" aria-label="Blog tags">
              @for (tag of post.tags; track tag) {
                <span class="tech-tag" role="listitem">{{ tag }}</span>
              }
            </div>

            <div class="author-info" itemprop="author" itemscope itemtype="https://schema.org/Person">
              <div class="author-avatar" aria-hidden="true">
                <svg width="24" height="24"><use href="#icon-user"></use></svg>
              </div>
              <div class="author-details">
                <span class="author-name" itemprop="name">{{ post.author }}</span>
                <span class="author-title">Senior Software Engineer</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Blog Content -->
        <div class="blog-content" itemprop="blogBody">
          <div class="container">
            <div class="content-wrapper">
              @if (post.sections && post.sections.length > 0) {
                @for (section of post.sections; track $index) {
                  @switch (section.type) {
                    @case ('h2') {
                      <h2 class="section-heading">{{ section.content }}</h2>
                    }
                    @case ('h3') {
                      <h3 class="section-subheading">{{ section.content }}</h3>
                    }
                    @case ('p') {
                      <p class="content-text">{{ section.content }}</p>
                    }
                    @case ('ul') {
                      <ul class="content-list">
                        @for (item of section.items; track $index) {
                          <li>{{ item }}</li>
                        }
                      </ul>
                    }
                    @case ('info') {
                      <div class="highlight-info">
                        <p><strong>Note:</strong> {{ section.content }}</p>
                      </div>
                    }
                    @case ('stats') {
                      <div class="stats-grid">
                        @for (stat of section.stats; track stat.label) {
                          <div class="stat-card" [style.--stat-color]="stat.color || 'var(--color-success)'">
                            <span class="stat-label">{{ stat.label }}</span>
                            <span class="stat-value">{{ stat.value }}</span>
                            @if (stat.trend) {
                              <span class="stat-trend">{{ stat.trend }}</span>
                            }
                          </div>
                        }
                      </div>
                    }
                    @case ('code') {
                      <div class="code-block">
                        <div class="code-header">
                          <span class="code-lang">{{ section.language || 'text' }}</span>
                          <button class="copy-btn" [attr.data-code]="encodeCode(section.code)">
                            <svg width="14" height="14"><use href="#icon-copy"></use></svg>
                            <span>Copy</span>
                          </button>
                        </div>
                        <pre><code>{{ section.code }}</code></pre>
                      </div>
                    }
                  }
                }
              } @else {
                <div class="placeholder-content">
                  <p>Blog content coming soon...</p>
                  <p>This post is currently being prepared. Check back soon for the full content!</p>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Related Posts -->
        @if (relatedPosts.length > 0) {
          <aside class="related-posts">
            <div class="container">
              <h2 class="section-title">Related Posts</h2>
              <div class="related-grid">
                @for (related of relatedPosts; track related.id) {
                  <a 
                    [routerLink]="['/blog', related.id]"
                    class="related-card card card-interactive">
                    <h3 class="related-title">{{ related.title }}</h3>
                    <p class="related-description">{{ related.description }}</p>
                    <div class="related-meta">
                      <time [attr.datetime]="related.date">{{ formatDate(related.date) }}</time>
                      <span class="meta-divider">•</span>
                      <span>{{ related.readTime }}</span>
                    </div>
                  </a>
                }
              </div>
            </div>
          </aside>
        }

        <!-- Blog Footer -->
        <footer class="blog-footer">
          <div class="container">
            <div class="footer-cta">
              <h3>Want to discuss this topic?</h3>
              <p>Feel free to reach out for collaboration or questions about the topics covered.</p>
              <a routerLink="/contact" class="btn btn-primary">Get in Touch</a>
            </div>
          </div>
        </footer>
      </article>
    } @else if (loading) {
      <div class="loading-state">
        <div class="container">
          <div class="loading-spinner" aria-label="Loading post"></div>
          <p>Loading post...</p>
        </div>
      </div>
    } @else {
      <div class="error-state">
        <div class="container">
          <h1>Post Not Found</h1>
          <p>The post you're looking for doesn't exist or has been moved.</p>
          <p class="debug-info" *ngIf="debugId">Attempted ID: {{ debugId }}</p>
          <a routerLink="/blog" class="btn btn-primary">Browse All Posts</a>
        </div>
      </div>
    }
  `,
  styles: [`
    /* ===== Blog Layout Styles ===== */
    .blog-header {
      padding-block: var(--space-3xl) var(--space-2xl);
      background: linear-gradient(180deg, rgba(var(--rgb-success), 0.03) 0%, transparent 100%);
      border-bottom: var(--border-subtle);
    }

    .breadcrumb {
      margin-bottom: var(--space-xl);
    }

    .blog-meta-header {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: var(--text-sm);
      color: var(--color-muted);
      margin-bottom: var(--space-lg);
    }

    .blog-title {
      font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
      font-weight: 800;
      color: var(--color-neutral);
      line-height: var(--leading-tight);
      margin-bottom: var(--space-lg);
      max-width: 50ch;
    }

    .blog-description {
      font-size: var(--text-xl);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin-bottom: var(--space-xl);
      max-width: 65ch;
    }

    .blog-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-xl);
    }

    .tech-tag {
      padding: 6px var(--space-sm);
      background: rgba(var(--rgb-success), 0.1);
      color: var(--color-success);
      font-size: var(--text-sm);
      font-weight: 500;
      border-radius: var(--radius-md);
      border: 1px solid rgba(var(--rgb-success), 0.2);
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-lg);
      background: rgba(255, 255, 255, 0.02);
      border: var(--border-subtle);
      border-radius: var(--radius-lg);
      width: fit-content;
    }

    .author-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: rgba(var(--rgb-success), 0.1);
      border-radius: var(--radius-full);
      color: var(--color-success);
    }

    .author-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .author-name {
      font-size: var(--text-base);
      font-weight: 600;
      color: var(--color-neutral);
    }

    .author-title {
      font-size: var(--text-sm);
      color: var(--color-muted);
    }

    /* ===== Blog Content ===== */
    .blog-content {
      padding-block: var(--space-3xl);
    }

    .content-wrapper {
      max-width: 75ch;
      margin: 0 auto;
    }

    .section-heading {
      font-size: var(--text-3xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin-top: var(--space-3xl);
      margin-bottom: var(--space-lg);
      line-height: var(--leading-tight);
    }

    .section-subheading {
      font-size: var(--text-2xl);
      font-weight: 600;
      color: var(--color-neutral);
      margin-top: var(--space-2xl);
      margin-bottom: var(--space-md);
      line-height: var(--leading-tight);
    }

    .content-text {
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      margin-bottom: var(--space-lg);
    }

    .content-list {
      margin-bottom: var(--space-lg);
      padding-left: var(--space-xl);
      color: var(--color-subtle);
    }

    .content-list li {
      margin-bottom: var(--space-sm);
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
    }

    .highlight-info {
      background: rgba(var(--rgb-success), 0.05);
      padding: var(--space-lg);
      border-left: 4px solid var(--color-success);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-xl);
    }

    .highlight-info p {
      margin-bottom: 0;
      color: var(--color-subtle);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-md);
      margin-bottom: var(--space-xl);
      margin-top: var(--space-xl);
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.02);
      padding: var(--space-lg);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.05);
      text-align: center;
      transition: transform var(--duration-quick) var(--ease-out);
    }

    .stat-card:hover {
      transform: translateY(-4px);
      background: rgba(255, 255, 255, 0.03);
    }

    .stat-label {
      display: block;
      font-size: var(--text-xs);
      color: var(--color-muted);
      text-transform: uppercase;
      margin-bottom: var(--space-xs);
    }

    .stat-value {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--stat-color, var(--color-success));
    }

    .stat-trend {
      display: block;
      font-size: var(--text-xs);
      color: var(--stat-color, var(--color-success));
      margin-top: 4px;
      opacity: 0.8;
    }

    .code-block {
      background: #0d1117;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-xl);
      overflow: hidden;
      box-shadow: var(--elevation-2);
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-xs) var(--space-md);
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .code-lang {
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .copy-btn {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-sm);
      color: var(--color-subtle);
      font-size: var(--text-xs);
      padding: 4px 8px;
      cursor: pointer;
      transition: all var(--duration-quick) var(--ease-out);
    }

    .copy-btn:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--color-success);
      border-color: var(--color-success);
    }

    .copy-btn.copied {
      color: var(--color-success);
      border-color: var(--color-success);
    }

    pre {
      margin: 0;
      padding: var(--space-lg);
      overflow-x: auto;
      background: transparent;
      border: none;
    }

    code {
      font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      line-height: 1.5;
      color: #e6edf3;
    }

    /* ===== Related Posts ===== */
    .related-posts {
      padding-block: var(--space-3xl);
      background: rgba(255, 255, 255, 0.01);
      border-top: var(--border-subtle);
    }

    .section-title {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin-bottom: var(--space-xl);
    }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
    }

    .related-card {
      padding: var(--space-lg);
      text-decoration: none;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    /* ===== Blog Footer ===== */
    .blog-footer {
      padding-block: var(--space-4xl);
      background: linear-gradient(0deg, rgba(var(--rgb-success), 0.03) 0%, transparent 100%);
      border-top: var(--border-subtle);
      margin-top: var(--space-3xl);
    }

    .footer-cta {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
      padding: var(--space-2xl);
      background: var(--bg-surface);
      border: 1px solid rgba(var(--rgb-success), 0.1);
      border-radius: var(--radius-xl);
      box-shadow: var(--elevation-2);
    }

    .footer-cta h3 {
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-neutral);
      margin-bottom: var(--space-md);
    }

    .footer-cta p {
      color: var(--color-subtle);
      margin-bottom: var(--space-xl);
    }

    /* ===== State Styles ===== */
    .loading-state, .error-state {
      padding-block: var(--space-3xl);
      text-align: center;
    }

    .debug-info {
      font-size: var(--text-xs);
      color: var(--color-muted);
      margin-top: var(--space-md);
    }
  `]
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  loading = true;
  debugId: string | null = null;

  encodeCode(code: string | undefined): string {
    if (!code) return '';
    if (typeof btoa !== 'undefined') {
      return btoa(code);
    }
    return '';
  }

  @HostListener('click', ['$event'])
  onContentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const copyBtn = target.closest('.copy-btn') as HTMLButtonElement;

    if (copyBtn) {
      let code = '';
      const codeBase64 = copyBtn.getAttribute('data-code');

      if (codeBase64) {
        try {
          code = atob(codeBase64);
        } catch (e) {
          console.error('Failed to decode code:', e);
        }
      } else {
        // Fallback: Find the nearest code element within the same code-block
        const codeBlock = copyBtn.closest('.code-block');
        if (codeBlock) {
          const codeElement = codeBlock.querySelector('code');
          if (codeElement) {
            code = codeElement.innerText;
          }
        }
      }

      if (code) {
        this.copyToClipboard(code, copyBtn);
      }
    }
  }

  private copyToClipboard(text: string, btn: HTMLButtonElement) {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(text).then(() => {
        const originalContent = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `
          <svg width="14" height="14" style="color: var(--color-success)"><use href="#icon-check-circle"></use></svg>
          <span style="color: var(--color-success)">Copied!</span>
        `;

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalContent;
        }, 2000);
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private seoService: SeoService,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.debugId = postId;
      this.loadPost(postId);
    });
  }

  private loadPost(id: string) {
    this.loading = true;

    this.blogService.getPostById(id).subscribe({
      next: (post) => {
        this.post = post;
        this.loading = false;

        if (post) {
          this.updateSeo(post);
          this.loadRelatedPosts(id);
        }
      },
      error: (err) => {
        console.error('Error loading blog post:', err);
        this.loading = false;
      }
    });
  }

  private updateSeo(post: BlogPost) {
    this.seoService.setTitle(post.seoTitle);
    this.seoService.setDescription(post.seoDescription);
    this.seoService.setKeywords(post.seoKeywords);
    this.seoService.updateCanonicalUrl(`https://jaykumarpatil.com/blog/${post.id}`);

    // OG & Twitter tags
    this.meta.updateTag({ property: 'og:title', content: post.seoTitle });
    this.meta.updateTag({ property: 'og:description', content: post.seoDescription });
    this.meta.updateTag({ property: 'og:type', content: 'blog' });
    this.meta.updateTag({ property: 'og:url', content: `https://jaykumarpatil.com/blog/${post.id}` });
    this.meta.updateTag({ property: 'blog:published_time', content: post.date });
    this.meta.updateTag({ property: 'blog:author', content: post.author });
    this.meta.updateTag({ property: 'blog:tag', content: post.tags.join(', ') });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  private loadRelatedPosts(id: string) {
    this.blogService.getRelatedPosts(id).subscribe(related => {
      this.relatedPosts = related;
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

}
