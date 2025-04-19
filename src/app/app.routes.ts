import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jay Kumar Patil - DevOps & Cloud Specialist' },
  { path: 'about', component: AboutComponent, title: 'About - Jay Kumar Patil' },
  { path: 'experience', component: ExperienceComponent, title: 'Professional Experience - Jay Kumar Patil' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects - Jay Kumar Patil' },
  { path: 'skills', component: SkillsComponent, title: 'Skills - Jay Kumar Patil' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Jay Kumar Patil' },
  { path: '**', redirectTo: '' }
];