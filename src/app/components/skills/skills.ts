import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal';
import { IconComponent, IconName } from '../ui/icon/icon';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective, IconComponent],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly groups = SKILL_GROUPS;
  protected readonly iconSets: readonly (readonly IconName[])[] = [
    ['java', 'spring', 'jwt'],
    ['kotlin', 'compose'],
    ['angular', 'typescript'],
    ['postgresql'],
    ['docker', 'git', 'github', 'github-actions'],
    ['github', 'status'],
  ];
}
