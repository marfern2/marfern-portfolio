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
      { name: 'Maven' },
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
      { name: 'Linux / Bash' },
      { name: 'AWS' },
      { name: 'Proxmox' },
      { name: 'Kubernetes', learning: true },
    ],
  },
  {
    name: 'QA & Testing',
    index: '06',
    skills: [
      { name: 'Selenium WebDriver', featured: true },
      { name: 'Playwright', featured: true },
      { name: 'Appium', featured: true },
      { name: 'Postman' },
      { name: 'JMeter' },
      { name: 'SQL' },
      { name: 'TestNG' },
      { name: 'Cucumber' },
      { name: 'Jira' },
      { name: 'Notion' },
      { name: 'Swagger / OpenAPI' },
    ],
  },
];

export const EXPERIENCES: readonly Experience[] = [
  {
    role: 'QA Tester Manual & Automation',
    company: 'Webelapp Technologies S.L.',
    period: 'Jun 2026 — Jul 2026',
    summary:
      'QA manual y automatizado sobre aplicaciones web y móviles, con cobertura funcional, de regresión, APIs, bases de datos y rendimiento.',
    details: [
      {
        title: 'Testing manual',
        items: [
          'Diseño, ejecución y mantenimiento de pruebas funcionales, de regresión, smoke y exploratorias sobre aplicaciones web y móviles.',
          'Preparación de casos y escenarios de prueba, con identificación, reproducción, documentación y seguimiento de defectos.',
          'Gestión del ciclo de vida de incidencias y colaboración con desarrollo para analizar y reproducir errores.',
        ],
      },
      {
        title: 'Web Automation',
        items: [
          'Automatización de flujos funcionales y pruebas de regresión web con Selenium WebDriver y Playwright.',
          'Mantenimiento de suites de pruebas automatizadas con Java, TestNG y Maven.',
        ],
      },
      {
        title: 'Mobile Testing',
        items: [
          'Automatización y validación funcional de aplicaciones Android e iOS con Appium.',
          'Cobertura de flujos críticos y pruebas de regresión sobre aplicaciones móviles.',
        ],
      },
      {
        title: 'API & Database Testing',
        items: [
          'Validación de endpoints REST con Postman, comprobando request/response, códigos HTTP, datos y comportamiento funcional.',
          'Validación de información mediante consultas SQL y comprobación de consistencia entre aplicación, API y base de datos cuando correspondía.',
        ],
      },
      {
        title: 'Performance & gestión',
        items: [
          'Pruebas de rendimiento y carga con JMeter.',
          'Documentación y seguimiento de casos de prueba e incidencias con Jira y Notion; control de versiones con Git.',
        ],
      },
    ],
    technologies: [
      'Selenium WebDriver',
      'Playwright',
      'Appium',
      'Postman',
      'JMeter',
      'SQL',
      'Java',
      'TestNG',
      'Jira',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'CRC Information Technologies',
    location: 'Madrid',
    period: 'Mar 2026 — Jun 2026',
    summary:
      'Desarrollo Full Stack con Java/Spring Boot, C#/.NET y Angular, integrando pruebas automatizadas y CI/CD en el ciclo de desarrollo.',
    details: [
      {
        title: 'Desarrollo Full Stack',
        items: [
          'Desarrollo backend con Java y Spring Boot, APIs REST, lógica de negocio y arquitectura basada en microservicios.',
          'Desarrollo con C# y .NET, y frontend con Angular y TypeScript.',
          'Integración entre frontend y backend, con mantenimiento de APIs REST.',
          'Persistencia con JPA/Hibernate en el backend Java y con Entity Framework/LINQ en .NET.',
        ],
      },
      {
        title: 'Datos e infraestructura',
        items: [
          'Trabajo con Oracle Database y SQL Server, incluyendo consultas SQL para validación y tratamiento de información.',
          'Uso de Maven, GitLab, Docker, Jenkins y Linux/Bash dentro de procesos de integración continua.',
          'Trabajo con servicios AWS (EC2, RDS y S3).',
        ],
      },
      {
        title: 'Testing y CI/CD',
        items: [
          'Testing funcional de aplicaciones y automatización de pruebas web con Selenium WebDriver y Playwright.',
          'Automatización con Java y escenarios BDD con Cucumber cuando correspondía.',
          'Validación de APIs REST con Postman y de datos mediante consultas SQL.',
          'Pruebas de rendimiento y carga con JMeter, integrando la ejecución de pruebas en Jenkins y GitLab CI.',
        ],
      },
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'C#',
      '.NET',
      'Angular',
      'Oracle',
      'SQL Server',
      'Selenium WebDriver',
      'Docker',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Fata Express S.L.',
    location: 'Manzanares el Real, Madrid',
    period: 'Oct 2025 — Mar 2026',
    summary:
      'Desarrollo Full Stack de una plataforma de gestión de portes, conductores y operativa de transporte, con backend, app Android y frontend web.',
    details: [
      {
        title: 'Desarrollo backend',
        items: [
          'Desarrollo backend con Java y Spring Boot, incluyendo APIs REST, lógica de negocio y arquitectura basada en microservicios.',
          'Persistencia y acceso a datos con JPA/Hibernate, consultas y validaciones SQL.',
        ],
      },
      {
        title: 'Aplicación móvil y frontend',
        items: [
          'Desarrollo de aplicación Android con Kotlin y Jetpack Compose.',
          'Desarrollo de panel web con Angular y TypeScript, integrado con el backend y la aplicación móvil.',
        ],
      },
      {
        title: 'Funcionalidad y calidad',
        items: [
          'Desarrollo de funcionalidades para gestión de portes, conductores y operativa de transporte.',
          'Validación funcional de las funcionalidades desarrolladas y automatización de pruebas web con Selenium WebDriver y Playwright.',
          'Pruebas de aplicaciones móviles con Appium y validación de APIs REST con Postman.',
          'Validación de datos mediante SQL y pruebas de rendimiento y carga con JMeter.',
        ],
      },
      {
        title: 'Entorno y herramientas',
        items: [
          'Uso de Maven para gestión del proyecto, Git para control de versiones y Linux/Bash en el entorno de desarrollo.',
        ],
      },
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Kotlin',
      'Jetpack Compose',
      'Angular',
      'Selenium WebDriver',
      'Playwright',
    ],
  },
  {
    role: 'IT Support Technician',
    company: 'El Corte Inglés',
    location: 'Madrid',
    period: 'Mar 2024 — Jun 2025',
    summary:
      'Soporte informático corporativo a empleados internos, con gestión de incidencias, administración de usuarios y soporte de equipos y aplicaciones.',
    details: [
      {
        title: 'Soporte y ticketing',
        items: [
          'Soporte técnico presencial y remoto a empleados internos de El Corte Inglés, con atención al usuario final.',
          'Gestión, seguimiento y resolución de incidencias mediante Jira y ServiceNow.',
          'Seguimiento del ciclo de vida de las incidencias hasta su resolución o escalado, con documentación técnica.',
        ],
      },
      {
        title: 'Usuarios y aplicaciones',
        items: [
          'Administración y soporte básico mediante Active Directory: usuarios, accesos, cuentas y resolución de incidencias de autenticación cuando correspondía.',
          'Soporte sobre Microsoft 365 y resolución de incidencias relacionadas con aplicaciones y herramientas corporativas.',
        ],
      },
      {
        title: 'Hardware e inventario',
        items: [
          'Instalación, diagnóstico y mantenimiento de hardware y software, con intervención física sobre equipos informáticos.',
          'Preparación, sustitución y mantenimiento de componentes y periféricos cuando era necesario.',
          'Gestión e inventariado de equipos informáticos y activos.',
        ],
      },
    ],
    technologies: [
      'Active Directory',
      'Microsoft 365',
      'Jira',
      'ServiceNow',
      'Windows',
      'Hardware',
      'Inventario IT',
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
