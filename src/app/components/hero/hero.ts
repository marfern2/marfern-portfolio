import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';
import { IconComponent } from '../ui/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective, IconComponent],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly imageAvailable = signal(true);

  protected onImageError(): void {
    this.imageAvailable.set(false);
  }
}
