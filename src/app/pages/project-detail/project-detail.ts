import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../models/project.models';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  protected readonly project = inject(ActivatedRoute).snapshot.data['project'] as Project;
  protected readonly isFeatured = this.project.featured;
  protected readonly sections = [
    { title: 'Funcionalidades', summary: 'Gestión de tareas desde Android y el panel web.' },
    { title: 'Capturas', summary: 'Capturas de Android y Admin pendientes de incorporar.' },
    { title: 'Arquitectura', summary: 'App Android, panel Angular, API Spring Boot y PostgreSQL.' },
    {
      title: 'Infraestructura',
      summary: 'Docker sobre servidor Linux propio, Cloudflare Tunnel y entornos DEV / PROD.',
    },
    { title: 'Seguridad', summary: 'Autenticación JWT con Spring Security.' },
    {
      title: 'Calidad / CI-CD',
      summary: 'Tests y releases independientes con GitHub Actions y GHCR.',
    },
  ];
}
