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
});
