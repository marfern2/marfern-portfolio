import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { EducationComponent } from './components/education/education';
import { ExperienceComponent } from './components/experience/experience';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
