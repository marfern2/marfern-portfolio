import { Routes } from '@angular/router';
import { DONIT, DONIT_TFG } from './data/projects.data';
import { HomeComponent } from './pages/home/home';
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
    component: ProjectDetailComponent,
    title: 'Donit v1.0.0 | Marcos Fernández Espeja',
    data: { project: DONIT, description: DONIT.shortDescription },
  },
  {
    path: 'projects/donit-tfg',
    component: ProjectDetailComponent,
    title: 'DoNit TFG | Marcos Fernández Espeja',
    data: { project: DONIT_TFG, description: DONIT_TFG.shortDescription },
  },
  { path: '**', redirectTo: '' },
];
