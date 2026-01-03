import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

export interface BlogSection {
    type: 'p' | 'h2' | 'h3' | 'code' | 'ul' | 'info' | 'stats';
    content?: string;
    items?: string[];
    language?: string;
    code?: string;
    stats?: {
        label: string;
        value: string;
        color?: string;
        trend?: string;
    }[];
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    featured: boolean;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    sections?: BlogSection[];
}

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private http = inject(HttpClient);
    private postsCache$: Observable<BlogPost[]> | null = null;
    private readonly JSON_URL = '/api/blog.json';

    constructor() { }

    /**
     * Fetch and cache blog posts from API
     */
    private fetchPosts(): Observable<BlogPost[]> {
        if (!this.postsCache$) {
            this.postsCache$ = this.http.get<BlogPost[]>(this.JSON_URL).pipe(
                shareReplay(1)
            );
        }
        return this.postsCache$;
    }

    /**
     * Get all blog posts
     */
    getAllPosts(): Observable<BlogPost[]> {
        return this.fetchPosts();
    }

    /**
     * Get featured posts
     */
    getFeaturedPosts(): Observable<BlogPost[]> {
        return this.fetchPosts().pipe(
            map(posts => posts.filter(post => post.featured))
        );
    }

    /**
     * Get post by ID (slug)
     */
    getPostById(id: string): Observable<BlogPost | undefined> {
        return this.fetchPosts().pipe(
            map(posts => posts.find(p => p.id === id))
        );
    }

    /**
     * Get related posts based on tags
     */
    getRelatedPosts(currentPostId: string, limit: number = 3): Observable<BlogPost[]> {
        return this.fetchPosts().pipe(
            map(posts => {
                const currentPost = posts.find(p => p.id === currentPostId);
                if (!currentPost) {
                    return [];
                }

                const related = posts
                    .filter(post => post.id !== currentPostId)
                    .map(post => {
                        const commonTags = post.tags.filter(tag =>
                            currentPost.tags.includes(tag)
                        ).length;
                        return { post, score: commonTags };
                    })
                    .filter(item => item.score > 0)
                    .sort((a, b) => b.score - a.score)
                    .slice(0, limit)
                    .map(item => item.post);

                return related;
            })
        );
    }

    /**
     * Get all unique tags
     */
    getAllTags(): Observable<string[]> {
        return this.fetchPosts().pipe(
            map(posts => {
                const tagsSet = new Set<string>();
                posts.forEach(post => {
                    post.tags.forEach(tag => tagsSet.add(tag));
                });
                return Array.from(tagsSet).sort();
            })
        );
    }

    /**
     * Get posts by tag
     */
    getPostsByTag(tag: string): Observable<BlogPost[]> {
        return this.fetchPosts().pipe(
            map(posts => posts.filter(post => post.tags.includes(tag)))
        );
    }
}
