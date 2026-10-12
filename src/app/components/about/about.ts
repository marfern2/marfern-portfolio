import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
