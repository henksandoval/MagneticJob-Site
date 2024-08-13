import { Component } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FactComponent } from './fact/fact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    CoverComponent,
    FooterComponent,
    AboutComponent,
    FactComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  template: `
    <app-about></app-about>
    <app-fact></app-fact>
    <app-skills></app-skills>
    <app-resume></app-resume>
    <app-portfolio></app-portfolio>
    <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `,
  styles: ``,
})
export class ProfileComponent {}
