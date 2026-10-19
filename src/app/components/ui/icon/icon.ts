import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  siAngular,
  siAndroid,
  siCloudflare,
  siDocker,
  siFlyway,
  siGit,
  siGithub,
  siGithubactions,
  siGmail,
  siHibernate,
  siJetpackcompose,
  siJsonwebtokens,
  siKotlin,
  siLinux,
  siMaterialdesign,
  siOpenjdk,
  siPostgresql,
  siSpringboot,
  siSpringsecurity,
  siTypescript,
  siXml,
} from 'simple-icons';

export type IconName =
  | 'android'
  | 'angular'
  | 'cloudflare'
  | 'compose'
  | 'docker'
  | 'email'
  | 'external'
  | 'flyway'
  | 'git'
  | 'github'
  | 'github-actions'
  | 'hibernate'
  | 'java'
  | 'jwt'
  | 'kotlin'
  | 'linkedin'
  | 'linux'
  | 'location'
  | 'material'
  | 'postgresql'
  | 'spring'
  | 'spring-security'
  | 'status'
  | 'typescript'
  | 'xml';

interface IconDefinition {
  readonly path: string;
  readonly viewBox?: string;
  readonly stroke?: boolean;
}

const ICONS: Record<IconName, IconDefinition> = {
  android: siAndroid,
  angular: siAngular,
  cloudflare: siCloudflare,
  compose: siJetpackcompose,
  docker: siDocker,
  email: siGmail,
  flyway: siFlyway,
  git: siGit,
  github: siGithub,
  'github-actions': siGithubactions,
  hibernate: siHibernate,
  java: siOpenjdk,
  jwt: siJsonwebtokens,
  kotlin: siKotlin,
  linux: siLinux,
  material: siMaterialdesign,
  postgresql: siPostgresql,
  spring: siSpringboot,
  'spring-security': siSpringsecurity,
  typescript: siTypescript,
  xml: siXml,
  external: {
    path: 'M7 17 17 7M8 7h9v9M17 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6',
    stroke: true,
  },
  linkedin: {
    path: 'M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM1.06 8h3.86v12.4H1.06V8Zm6.28 0h3.7v1.7h.05c.52-.98 1.78-2.02 3.66-2.02 3.91 0 4.63 2.57 4.63 5.92v6.8h-3.85v-6.03c0-1.44-.03-3.29-2.01-3.29-2.01 0-2.32 1.57-2.32 3.18v6.14H7.34V8Z',
    viewBox: '0 0 20.4 22',
  },
  location: {
    path: 'M12 22s7-6.1 7-13A7 7 0 1 0 5 9c0 6.9 7 13 7 13Zm0-9.8A3.2 3.2 0 1 1 12 5.8a3.2 3.2 0 0 1 0 6.4Z',
  },
  status: {
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.7 7.3-5.5 5.5a1 1 0 0 1-1.4 0l-2.5-2.5 1.4-1.4 1.8 1.8 4.8-4.8 1.4 1.4Z',
  },
};

@Component({
  selector: 'app-icon',
  template: `
    <svg [attr.viewBox]="icon().viewBox ?? '0 0 24 24'" focusable="false" aria-hidden="true">
      <path
        [attr.d]="icon().path"
        [attr.fill]="icon().stroke ? 'none' : 'currentColor'"
        [attr.stroke]="icon().stroke ? 'currentColor' : null"
        [attr.stroke-width]="icon().stroke ? 2 : null"
        stroke-linecap="square"
        stroke-linejoin="miter"
      />
    </svg>
  `,
  host: { class: 'app-icon' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  protected readonly icon = computed(() => ICONS[this.name()]);
}
