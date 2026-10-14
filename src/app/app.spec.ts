import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the professional title and main sections', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Marcos');
    expect(compiled.querySelector('#proyectos')).toBeTruthy();
    expect(compiled.querySelector('#contacto')).toBeTruthy();
  });

  it('shows both project cards with their detail routes', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/');
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.donit-panel h3')?.textContent).toContain('Donit');
    expect(compiled.querySelector('.origin-card h3')?.textContent).toContain('DoNit TFG');
    expect(compiled.querySelector<HTMLAnchorElement>('.donit-links a')?.getAttribute('href')).toBe(
      '/projects/donit',
    );
    expect(
      compiled.querySelector<HTMLAnchorElement>('.origin-card__cta')?.getAttribute('href'),
    ).toBe('/projects/donit-tfg');
  });

  it.each([
    ['/projects/donit', 'Donit', 'Demo pública'],
    ['/projects/donit-tfg', 'DoNit TFG', 'Evolución del proyecto'],
  ])('renders %s directly', async (path, title, content) => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl(path);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(title);
    expect(compiled.textContent).toContain(content);
  });

  it('links the original TFG to the newer Donit', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/projects/donit-tfg');
    await fixture.whenStable();

    const link = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>(
      '.evolution a',
    );
    expect(link?.getAttribute('href')).toBe('/projects/donit');
    link?.click();
    await fixture.whenStable();
    expect(router.url).toBe('/projects/donit');
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain(
      'Donit',
    );
  });

  it('shows the Donit showcase, public demo, repositories and original TFG', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/projects/donit');
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Donit');
    expect(page.querySelector('.hero-subtitle')?.textContent).toContain(
      'Plataforma de gestión de tareas',
    );
    expect(page.querySelector('.version')?.textContent).toBe('v1.0.0');
    expect(page.querySelector('.showcase-hero__art img')?.getAttribute('src')).toBe(
      '/images/projects/donit/00-cover.webp',
    );

    const links = [...page.querySelectorAll<HTMLAnchorElement>('.hero-actions a')];
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      'https://admin-donit.marfern.dev/demo',
      'https://github.com/marfern2/tareas-app-api',
      'https://github.com/marfern2/tareas-app-front',
      'https://github.com/marfern2/admin-donit',
    ]);
    for (const link of links) {
      expect(link.target).toBe('_blank');
      expect(link.rel).toBe('noopener noreferrer');
      expect(link.getAttribute('aria-label')).toBeTruthy();
    }
    expect(page.querySelector<HTMLAnchorElement>('.origin-link')?.getAttribute('href')).toBe(
      '/projects/donit-tfg',
    );
    expect(page.querySelector<HTMLAnchorElement>('.evolution a')?.getAttribute('href')).toBe(
      '/projects/donit-tfg',
    );
    expect([...page.querySelectorAll('h2')].map((heading) => heading.textContent?.trim())).toEqual([
      'Qué es Donit',
      'Funcionalidades',
      'Galería',
      'Arquitectura',
      'Infraestructura y despliegue',
      'Seguridad',
      'Calidad y entrega',
      'Tecnologías',
      'De TFG a v1.0.0',
    ]);
    expect(page.textContent).toContain('Restore preview y restore explícito');
    expect(page.textContent).toContain('Acceso sin login');
    const stackItems = [...page.querySelectorAll<HTMLElement>('.stack-group li')];
    expect(stackItems).toHaveLength(18);
    expect(stackItems.map((item) => item.textContent?.trim())).toEqual(
      expect.arrayContaining([
        'Java 21',
        'Spring Boot',
        'PostgreSQL',
        'Angular',
        'Kotlin',
        'Android',
        'Docker',
        'Git',
        'GitHub',
        'Linux',
        'Cloudflare Tunnel',
        'JWT',
        'Flyway',
      ]),
    );
    expect(stackItems.every((item) => item.querySelector('app-icon svg'))).toBe(true);
  });

  it('opens the Donit gallery, changes image with arrow keys and restores focus on close', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/projects/donit');
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    const dialog = page.querySelector<HTMLDialogElement>('.gallery-dialog')!;
    dialog.showModal = () => dialog.setAttribute('open', '');
    dialog.close = () => {
      dialog.removeAttribute('open');
      dialog.dispatchEvent(new Event('close'));
    };
    const thumbnails = page.querySelectorAll<HTMLButtonElement>('.gallery-card button');
    expect(thumbnails).toHaveLength(11);
    thumbnails[0].focus();
    thumbnails[0].click();
    await fixture.whenStable();
    expect(dialog.open).toBe(true);
    expect(document.activeElement?.getAttribute('aria-label')).toBe('Cerrar imagen ampliada');
    expect(dialog.querySelector('figcaption')?.textContent).toContain('Autenticación en Android');
    expect(dialog.querySelector('img')?.getAttribute('src')).toContain('01-login.webp');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    expect(dialog.querySelector('figcaption')?.textContent).toContain(
      'Gestión principal de tareas',
    );
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    await fixture.whenStable();
    expect(dialog.querySelector('img')?.getAttribute('src')).toContain('01-login.webp');

    dialog.querySelector<HTMLButtonElement>('[aria-label="Cerrar imagen ampliada"]')?.click();
    await fixture.whenStable();
    expect(dialog.open).toBe(false);
    expect(document.activeElement).toBe(thumbnails[0]);
  });

  it('gives diagrams a larger gallery layout and a reversible zoom in the lightbox', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/projects/donit');
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    const dialog = page.querySelector<HTMLDialogElement>('.gallery-dialog')!;
    dialog.showModal = () => dialog.setAttribute('open', '');
    dialog.close = () => {
      dialog.removeAttribute('open');
      dialog.dispatchEvent(new Event('close'));
    };
    const thumbnails = page.querySelectorAll<HTMLButtonElement>('.gallery-card button');
    expect(thumbnails[9].closest('.gallery-card--diagram')).toBeTruthy();
    expect(thumbnails[10].closest('.gallery-card--summary')).toBeTruthy();
    thumbnails[9].click();
    await fixture.whenStable();
    expect(dialog.classList.contains('gallery-dialog--diagram')).toBe(true);
    const zoom = dialog.querySelector<HTMLButtonElement>(
      '[aria-label="Ampliar diagrama para ver detalles"]',
    )!;
    zoom.click();
    await fixture.whenStable();
    expect(dialog.classList.contains('gallery-dialog--zoomed')).toBe(true);
    expect(zoom.getAttribute('aria-pressed')).toBe('true');
    zoom.click();
    await fixture.whenStable();
    expect(dialog.classList.contains('gallery-dialog--zoomed')).toBe(false);
    dialog.querySelector<HTMLButtonElement>('[aria-label="Imagen siguiente"]')?.click();
    await fixture.whenStable();
    expect(dialog.classList.contains('gallery-dialog--summary')).toBe(true);
    expect(dialog.querySelector('img')?.getAttribute('src')).toContain('11-technical-summary.webp');
    dialog.querySelector<HTMLButtonElement>('[aria-label="Cerrar imagen ampliada"]')?.click();
    await fixture.whenStable();
    expect(document.activeElement).toBe(thumbnails[9]);
  });

  it('updates Donit metadata and resets the social image on other routes', async () => {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/projects/donit');
    await fixture.whenStable();
    expect(document.title).toContain('Donit v1.0.0');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'app Android nativa',
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://marfern.dev/projects/donit',
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://marfern.dev/projects/donit',
    );
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://marfern.dev/images/projects/donit/00-cover.webp',
    );
    await router.navigateByUrl('/');
    await fixture.whenStable();
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://marfern.dev/images/profile.png',
    );
    canonical.remove();
  });
});
