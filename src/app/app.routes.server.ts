import { RenderMode, ServerRoute } from '@angular/ssr';
import blogData from '../../public/api/blog.json';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const posts = blogData as Array<{ id: string }>;
      return posts.map(post => ({ id: post.id }));
    }
  },
  {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { id: 'performance-optimization' },
        { id: 'microservices-transformation' },
        { id: 'cicd-automation' },
        { id: 'avid-secure' },
        { id: 'cloud-ocular' }
      ];
    }
  },
  {
    path: 'blogs/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'blogs',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
