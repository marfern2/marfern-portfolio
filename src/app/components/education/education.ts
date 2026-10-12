import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly education = EDUCATION;
}
