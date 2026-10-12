import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';
import { IconComponent, IconName } from '../ui/icon/icon';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, IconComponent],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly capabilities: readonly {
    readonly name: string;
    readonly detail: string;
    readonly icon: IconName;
  }[] = [
    { name: 'JWT', detail: 'Rotation', icon: 'jwt' },
    { name: 'Docker', detail: 'Compose', icon: 'docker' },
    { name: 'CI/CD', detail: 'GHCR', icon: 'github-actions' },
    { name: 'Postgres', detail: 'Flyway', icon: 'postgresql' },
    { name: 'Tunnel', detail: 'Cloudflare', icon: 'cloudflare' },
    { name: 'Tests', detail: 'Health', icon: 'status' },
  ];
}
