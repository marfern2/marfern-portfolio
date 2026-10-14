import { Routes } from '@angular/router';
import { DONIT_TFG } from './data/projects.data';
import { HomeComponent } from './pages/home/home';
import { DonitShowcaseComponent } from './pages/donit-showcase/donit-showcase';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Marcos Fernández Espeja | Backend Developer',
    data: {
      description:
        'Backend Developer especializado en Java, Spring Boot y desarrollo de aplicaciones modernas.',
    },
  },
  {
    path: 'projects/donit',
    component: DonitShowcaseComponent,
    title: 'Donit v1.0.0 | Android, API y Admin | Marcos Fernández Espeja',
    data: {
      description:
        'Donit v1.0.0: app Android nativa, API Spring Boot, Admin Angular y demo pública. Arquitectura, seguridad, CI/CD y despliegue propio.',
      image: '/images/projects/donit/00-cover.webp',
      imageAlt: 'Portada del proyecto Donit v1.0.0',
    },
  },
  {
    path: 'projects/donit-tfg',
    component: ProjectDetailComponent,
    title: 'DoNit TFG | Marcos Fernández Espeja',
    data: { project: DONIT_TFG, description: DONIT_TFG.shortDescription },
  },
  { path: '**', redirectTo: '' },
];
