import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;
}
