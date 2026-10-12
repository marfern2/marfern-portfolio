import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';
import { IconComponent } from '../ui/icon/icon';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, IconComponent],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
