import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about';
import { ContactComponent } from '../../components/contact/contact';
import { EducationComponent } from '../../components/education/education';
import { ExperienceComponent } from '../../components/experience/experience';
import { HeroComponent } from '../../components/hero/hero';
import { ProjectsComponent } from '../../components/projects/projects';
import { SkillsComponent } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
