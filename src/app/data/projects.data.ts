import { Project } from '../models/project.models';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'donit',
    title: 'Donit',
    subtitle: 'Plataforma de gestión de tareas',
    status: 'v1.0.0',
    shortDescription: 'Gestión de tareas con app Android, API y panel de administración.',
    longDescription:
      'Evolución del proyecto original hacia una app Android nativa con API propia, Admin web, demo pública y despliegues independientes en DEV y PROD.',
    role: 'Desarrollo full-stack / arquitectura / despliegue',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Angular Admin',
      'PostgreSQL',
      'Docker',
      'Cloudflare Tunnel',
      'GitHub Actions',
      'GHCR',
    ],
    cardTechnologies: ['Java 21', 'Spring Boot', 'Kotlin', 'Angular Admin', 'PostgreSQL', 'Docker'],
    highlights: [
      'Demo pública y entornos DEV / PROD separados.',
      'Servidor Linux propio, dominios propios y Cloudflare Tunnel.',
      'Testing, CI/CD y releases independientes.',
    ],
    demo: { label: 'Demo pública', url: 'https://admin-donit.marfern.dev/demo' },
    repositories: [
      { label: 'Backend GitHub', url: 'https://github.com/marfern2/tareas-app-api' },
      { label: 'Android GitHub', url: 'https://github.com/marfern2/tareas-app-front' },
      { label: 'Admin GitHub', url: 'https://github.com/marfern2/admin-donit' },
    ],
    links: [],
    images: [],
    featured: true,
    origin: 'donit-tfg',
  },
  {
    slug: 'donit-tfg',
    title: 'DoNit TFG',
    subtitle: 'Versión original del proyecto',
    status: 'TFG · Proyecto original',
    shortDescription: 'Mi TFG full-stack de gestión de tareas, origen de Donit v1.0.0.',
    longDescription:
      'Primera versión completa de DoNit como TFG: API REST en Spring Boot, clientes Android y JavaFX, PostgreSQL y despliegue en AWS.',
    role: 'Full-Stack Developer · Arquitectura y despliegue',
    technologies: [
      'Spring Boot',
      'Android XML',
      'JavaFX',
      'PostgreSQL',
      'AWS EC2',
      'Amazon RDS',
      'REST',
      'JWT',
    ],
    cardTechnologies: ['Spring Boot', 'Android XML', 'JavaFX', 'PostgreSQL', 'AWS'],
    highlights: [
      'Arquitectura REST con autenticación JWT.',
      'Backend y clientes Android XML y JavaFX.',
      'Despliegue académico en AWS EC2 y Amazon RDS.',
    ],
    links: [],
    repositories: [],
    images: [],
    featured: false,
    relatedProject: 'donit',
  },
];

export const DONIT = PROJECTS[0];
export const DONIT_TFG = PROJECTS[1];
