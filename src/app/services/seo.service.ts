import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  jsonLd?: object;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseTitle = 'Jay Kumar Patil | Senior Engineering Lead';
  private readonly baseDescription = 'Achievement-driven engineering lead with 10+ years in designing & delivering scalable cloud-native systems, DevOps automation, CI/CD pipelines, and performance optimization.';
  private readonly baseUrl = 'https://jaykumarpatil.github.io';
  private readonly defaultImage = 'https://jaykumarpatil.github.io/public/images/og-image.png';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.setupRouteListener();
  }

  private setupRouteListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCanonicalUrl();
    });
  }

  setTitle(title?: string): void {
    const fullTitle = title ? `${title} | ${this.baseTitle}` : this.baseTitle;
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
  }

  setDescription(description?: string): void {
    const desc = description || this.baseDescription;
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ property: 'og:description', content: desc });
    this.metaService.updateTag({ name: 'twitter:description', content: desc });
  }

  setKeywords(keywords: string): void {
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }

  updateCanonicalUrl(url?: string): void {
    const canonicalUrl = url || `${this.baseUrl}${this.router.url}`;
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
  }

  setOpenGraph(config: Partial<SeoConfig>): void {
    if (config.ogTitle) {
      this.metaService.updateTag({ property: 'og:title', content: config.ogTitle });
    }
    if (config.ogDescription) {
      this.metaService.updateTag({ property: 'og:description', content: config.ogDescription });
    }
    if (config.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: config.ogImage });
    }
    if (config.ogType) {
      this.metaService.updateTag({ property: 'og:type', content: config.ogType });
    }
  }

  setTwitterCard(card: string = 'summary_large_image', site?: string): void {
    this.metaService.updateTag({ name: 'twitter:card', content: card });
    if (site) {
      this.metaService.updateTag({ name: 'twitter:site', content: site });
    }
  }

  setJsonLd(data: object): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    let script = this.document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  setPageSeo(config: SeoConfig): void {
    this.setTitle(config.title);
    this.setDescription(config.description);
    if (config.keywords) this.setKeywords(config.keywords);
    if (config.canonicalUrl) this.updateCanonicalUrl(config.canonicalUrl);
    this.setOpenGraph(config);
    this.setTwitterCard(config.twitterCard, config.twitterSite);
    if (config.jsonLd) this.setJsonLd(config.jsonLd);
  }

  getPersonSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jay Kumar Patil',
      jobTitle: 'Senior Engineering Lead',
      description: this.baseDescription,
      url: this.baseUrl,
      image: this.defaultImage,
      email: 'jaykumarpatil3004@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressCountry: 'India'
      },
      sameAs: [
        'https://linkedin.com/in/jaykumarpatil3004',
        'https://github.com/jaykumarpatil',
        'https://apachehadoop3.blogspot.com'
      ],
      knowsAbout: [
        'Cloud Architecture',
        'DevOps',
        'Microservices',
        'Java',
        'Angular',
        'Kubernetes',
        'AWS',
        'Azure'
      ]
    };
  }

  getWebsiteSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Jay Kumar Patil Portfolio',
      url: this.baseUrl,
      description: this.baseDescription,
      author: {
        '@type': 'Person',
        name: 'Jay Kumar Patil'
      }
    };
  }
}
