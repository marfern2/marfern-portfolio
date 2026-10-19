import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  GalleryImage,
  GalleryLightboxComponent,
} from '../../components/ui/gallery-lightbox/gallery-lightbox';
import { IconComponent, IconName } from '../../components/ui/icon/icon';

interface StackItem {
  name: string;
  icon: IconName;
}

@Component({
  selector: 'app-donit-showcase',
  imports: [RouterLink, IconComponent, GalleryLightboxComponent],
  templateUrl: './donit-showcase.html',
  styleUrl: './donit-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonitShowcaseComponent {
  protected readonly gallery: readonly GalleryImage[] = [
    {
      src: '01-login.webp',
      caption: 'Autenticación en Android',
      alt: 'Pantalla de acceso de la app Android Donit',
      kind: 'mobile',
    },
    {
      src: '02-tasks.webp',
      caption: 'Gestión principal de tareas',
      alt: 'Listado de tareas de la app Android Donit',
      kind: 'mobile',
    },
    {
      src: '03-task-editor.webp',
      caption: 'Creación y edición de tareas',
      alt: 'Editor de tareas de la app Android Donit',
      kind: 'mobile',
    },
    {
      src: '04-calendar.webp',
      caption: 'Calendario y planificación',
      alt: 'Vista de calendario y planificación de Donit',
      kind: 'mobile',
    },
    {
      src: '05-profile.webp',
      caption: 'Perfil y estadísticas',
      alt: 'Pantalla de perfil y estadísticas de Donit',
      kind: 'mobile',
    },
    {
      src: '06-settings.webp',
      caption: 'Ajustes y personalización',
      alt: 'Pantalla de ajustes y temas de Donit',
      kind: 'mobile',
    },
    {
      src: '07-sidebar.webp',
      caption: 'Navegación lateral',
      alt: 'Menú lateral de la app Android Donit',
      kind: 'mobile',
    },
    {
      src: '08-public-demo.webp',
      caption: 'Demo pública',
      alt: 'Vista web de la demo pública de Donit',
      kind: 'web',
      width: 1350,
      height: 718,
    },
    {
      src: '09-admin-dashboard.webp',
      caption: 'Panel de administración',
      alt: 'Dashboard del panel de administración de Donit',
      kind: 'web',
      width: 1351,
      height: 717,
    },
    {
      src: '10-deployment-architecture.webp',
      caption: 'Arquitectura de despliegue',
      alt: 'Diagrama de infraestructura y despliegue de Donit',
      kind: 'diagram',
      width: 480,
      height: 360,
    },
    {
      src: '11-technical-summary.webp',
      caption: 'Arquitectura y resumen técnico',
      alt: 'Infografía de clientes, API y base de datos de Donit',
      kind: 'summary',
      width: 1254,
      height: 1254,
    },
  ];

  protected readonly androidFeatures = [
    'Login, registro y gestión de sesión con refresh',
    'Listado, creación y edición de tareas',
    'Completar, reabrir y eliminar tareas',
    'Tipos y categorías',
    'Calendario, recordatorios y notificaciones',
    'Perfil y estadísticas',
    'Ajustes y tema claro, oscuro o del sistema',
  ];

  protected readonly adminFeatures = [
    'Login administrativo y dashboard',
    'Gestión de usuarios, tareas y tipos',
    'Permisos de administración',
    'Gestión de contenido demo y demo-content',
    'Restore preview y restore explícito',
  ];

  protected readonly demoFeatures = [
    'Acceso sin login',
    'Usuarios demo, tipos y tareas',
    'Estadísticas públicas',
  ];

  protected readonly stack: readonly { group: string; items: readonly StackItem[] }[] = [
    {
      group: 'Móvil',
      items: [
        { name: 'Android', icon: 'android' },
        { name: 'Kotlin', icon: 'kotlin' },
        { name: 'Jetpack Compose', icon: 'compose' },
        { name: 'Material 3', icon: 'material' },
      ],
    },
    {
      group: 'Backend',
      items: [
        { name: 'Java 21', icon: 'java' },
        { name: 'Spring Boot', icon: 'spring' },
        { name: 'Spring Security', icon: 'spring-security' },
        { name: 'JWT', icon: 'jwt' },
        { name: 'Flyway', icon: 'flyway' },
      ],
    },
    { group: 'Web', items: [{ name: 'Angular', icon: 'angular' }] },
    { group: 'Datos', items: [{ name: 'PostgreSQL', icon: 'postgresql' }] },
    {
      group: 'Infraestructura',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Cloudflare Tunnel', icon: 'cloudflare' },
      ],
    },
    {
      group: 'CI/CD',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'GitHub Actions', icon: 'github-actions' },
        { name: 'GHCR', icon: 'github' },
      ],
    },
  ];

  protected imagePath(image: GalleryImage): string {
    return `/images/projects/donit/${image.src}`;
  }
}
