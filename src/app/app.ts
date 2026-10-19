import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        const route = this.router.routerState.snapshot.root.firstChild;
        const title = route?.title;
        const description = route?.data['description'] as string | undefined;
        const image = (route?.data['image'] as string | undefined) ?? '/images/profile.png';
        const imageAlt =
          (route?.data['imageAlt'] as string | undefined) ??
          'Marcos Fernández Espeja, Full-Stack Developer';
        const url = new URL(this.router.url.split('#')[0].split('?')[0], 'https://marfern.dev');

        if (typeof title === 'string') {
          this.title.setTitle(title);
          this.meta.updateTag({ property: 'og:title', content: title });
          this.meta.updateTag({ name: 'twitter:title', content: title });
        }
        if (description) {
          this.meta.updateTag({ name: 'description', content: description });
          this.meta.updateTag({ property: 'og:description', content: description });
          this.meta.updateTag({ name: 'twitter:description', content: description });
        }
        this.meta.updateTag({ property: 'og:url', content: url.href });
        this.meta.updateTag({ property: 'og:image', content: new URL(image, url.origin).href });
        this.meta.updateTag({ name: 'twitter:image', content: new URL(image, url.origin).href });
        this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });
        this.document.querySelector('link[rel="canonical"]')?.setAttribute('href', url.href);
      });
  }
}
