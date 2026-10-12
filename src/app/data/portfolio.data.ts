import { Education, Experience, SkillGroup } from '../models/portfolio.models';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    name: 'Backend',
    index: '01',
    skills: [
      { name: 'Java', featured: true },
      { name: 'Spring Boot', featured: true },
      { name: 'Spring Security' },
      { name: 'JWT' },
      { name: 'JPA / Hibernate' },
      { name: 'REST APIs' },
      { name: 'C#' },
      { name: '.NET' },
      { name: 'Entity Framework' },
      { name: 'LINQ' },
    ],
  },
  {
    name: 'Mobile',
    index: '02',
    skills: [
      { name: 'Kotlin', featured: true },
      { name: 'Jetpack Compose', featured: true },
      { name: 'Android' },
    ],
  },
  {
    name: 'Frontend',
    index: '03',
    skills: [
      { name: 'Angular', featured: true },
      { name: 'TypeScript' },
      { name: 'HTML' },
      { name: 'SCSS' },
    ],
  },
  {
    name: 'Bases de datos',
    index: '04',
    skills: [{ name: 'PostgreSQL', featured: true }, { name: 'Oracle' }, { name: 'SQL Server' }],
  },
  {
    name: 'DevOps / CI·CD',
    index: '05',
    skills: [
      { name: 'Docker', featured: true },
      { name: 'Docker Compose' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitHub Actions', featured: true },
      { name: 'GitLab' },
      { name: 'Jenkins' },
      { name: 'AWS' },
      { name: 'Proxmox' },
      { name: 'Kubernetes', learning: true },
    ],
  },
  {
    name: 'Tools / QA',
    index: '06',
    skills: [
      { name: 'Postman' },
      { name: 'Swagger / OpenAPI' },
      { name: 'Selenium WebDriver' },
      { name: 'TestNG' },
      { name: 'Jira' },
      { name: 'Notion' },
    ],
  },
];

export const EXPERIENCES: readonly Experience[] = [
  {
    role: 'Software QA Engineer',
    company: 'Webelapp Technologies S.L.',
    period: 'Jun 2026 — Jul 2026',
    summary: 'Validación manual de producto en entornos web y mobile.',
    responsibilities: [
      'Ejecución de pruebas manuales para aplicaciones web.',
      'Pruebas móviles en iOS y Android.',
    ],
  },
  {
    role: 'Desarrollador de Software',
    company: 'CRC Information Technologies',
    location: 'Madrid',
    period: 'Mar 2026 — Jun 2026',
    summary: 'Desarrollo e integración de aplicaciones con foco en APIs, datos y despliegue.',
    responsibilities: [
      'Desarrollo de APIs REST con C#/.NET y Java/Spring Boot.',
      'Implementación de lógica de negocio mediante arquitecturas por capas.',
      'Integración y consumo de APIs REST con Angular.',
      'Persistencia con Entity Framework, LINQ, JPA/Hibernate y SQL.',
      'Trabajo con Oracle, SQL Server, AWS EC2, RDS y S3.',
      'Contenedores Docker y CI con Jenkins y GitLab.',
    ],
    technologies: ['Java', 'Spring Boot', 'C#', '.NET', 'Angular', 'SQL', 'AWS', 'Docker'],
  },
  {
    role: 'Técnico informático',
    company: 'El Corte Inglés',
    location: 'Madrid',
    period: 'Mar 2024 — Jun 2025',
    summary: 'Soporte técnico, mantenimiento y operación de sistemas orientados al servicio.',
    responsibilities: [
      'Instalación y mantenimiento de software y hardware.',
      'Soporte presencial y remoto.',
      'Gestión de redes y monitorización de sistemas.',
      'Documentación técnica y cumplimiento de SLAs.',
    ],
  },
];

export const EDUCATION: readonly Education[] = [
  {
    institution: 'I.E.S. Virgen de la Paz',
    qualification: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
    period: 'Sep 2024 — Jun 2026',
  },
  {
    institution: 'UNIVERSAE',
    qualification: 'Grado Medio en Sistemas Microinformáticos y Redes',
    period: 'Sep 2022 — Jun 2024',
  },
  {
    institution: '42 Madrid',
    qualification: 'Formación en programación',
    description: 'Aprendizaje basado en proyectos y metodología peer-to-peer.',
    topics: ['Algoritmos', 'Arquitectura web', 'Programación', 'Desarrollo de bajo nivel'],
  },
];
