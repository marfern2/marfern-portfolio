import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { DonitShowcaseComponent } from './pages/donit-showcase/donit-showcase';
import { DonitTfgShowcaseComponent } from './pages/donit-tfg-showcase/donit-tfg-showcase';

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
    component: DonitTfgShowcaseComponent,
    title: 'DoNit TFG | Marcos Fernández Espeja',
    data: {
      description:
        'DoNit, mi TFG de DAM: proyecto full-stack de gestión de tareas con Spring Boot, Android, JavaFX, PostgreSQL y despliegue en AWS. Origen de Donit v1.0.0.',
    },
  },
  { path: '**', redirectTo: '' },
];
