import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DONIT, DONIT_TFG } from '../../data/projects.data';
import { RevealDirective } from '../../directives/reveal';
import { IconComponent, IconName } from '../ui/icon/icon';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, IconComponent, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly donit = DONIT;
  protected readonly tfg = DONIT_TFG;
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
