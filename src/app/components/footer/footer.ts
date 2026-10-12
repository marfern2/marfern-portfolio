import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../ui/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
