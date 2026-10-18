import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  GalleryImage,
  GalleryLightboxComponent,
} from '../../components/ui/gallery-lightbox/gallery-lightbox';
import { IconComponent, IconName } from '../../components/ui/icon/icon';

interface StackItem {
  name: string;
  icon?: IconName;
}

@Component({
  selector: 'app-donit-tfg-showcase',
  imports: [RouterLink, GalleryLightboxComponent, IconComponent],
  templateUrl: './donit-tfg-showcase.html',
  styleUrl: './donit-tfg-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonitTfgShowcaseComponent {
  protected readonly gallery: readonly GalleryImage[] = [
    {
      src: '00-login.webp',
      caption: 'Login del cliente Android original',
      alt: 'Pantalla de login del cliente Android original de DoNit',
      kind: 'mobile',
    },
    {
      src: '01-tasks.webp',
      caption: 'Pantalla principal de tareas',
      alt: 'Listado de tareas del cliente Android original de DoNit',
      kind: 'mobile',
    },
    {
      src: '02-profile.webp',
      caption: 'Perfil de usuario',
      alt: 'Perfil de usuario del cliente Android original de DoNit',
      kind: 'mobile',
    },
    {
      src: '03-settings.webp',
      caption: 'Ajustes de la aplicación',
      alt: 'Pantalla de ajustes del cliente Android original de DoNit',
      kind: 'mobile',
    },
    {
      src: '04-sidebar.webp',
      caption: 'Navegación lateral',
      alt: 'Menú lateral del cliente Android original de DoNit',
      kind: 'mobile',
    },
  ];

  protected readonly stack: readonly { group: string; items: readonly StackItem[] }[] = [
    {
      group: 'Backend',
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'Spring Boot', icon: 'spring' },
        { name: 'Spring Security', icon: 'spring-security' },
        { name: 'JWT', icon: 'jwt' },
        { name: 'JPA / Hibernate', icon: 'hibernate' },
      ],
    },
    { group: 'Datos', items: [{ name: 'PostgreSQL', icon: 'postgresql' }] },
    {
      group: 'Móvil',
      items: [
        { name: 'Kotlin', icon: 'kotlin' },
        { name: 'Android', icon: 'android' },
        { name: 'XML', icon: 'xml' },
      ],
    },
    { group: 'Escritorio', items: [{ name: 'JavaFX' }] },
    {
      group: 'Infraestructura',
      items: [
        { name: 'AWS' },
        { name: 'EC2' },
        { name: 'RDS' },
        { name: 'Linux', icon: 'linux' },
        { name: 'systemd' },
      ],
    },
    { group: 'Herramientas', items: [{ name: 'Git', icon: 'git' }] },
  ];

  protected imagePath(image: GalleryImage): string {
    return `/images/projects/donit-tfg/${image.src}`;
  }
}
