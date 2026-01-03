import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/projects/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./pages/blog/blog-detail.component').then(m => m.BlogDetailComponent)
  },
  {
    path: 'blogs',
    redirectTo: 'blog'
  },
  {
    path: 'blogs/:id',
    redirectTo: 'blog/:id'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
