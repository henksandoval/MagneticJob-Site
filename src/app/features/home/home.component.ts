import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './profile/about/about.component';
import { FactComponent } from './profile/fact/fact.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ResumeComponent } from './profile/resume/resume.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { ServicesComponent } from './profile/services/services.component';
import { TestimonialsComponent } from './profile/testimonials/testimonials.component';
import { ContactComponent } from './profile/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CoverComponent,
    AboutComponent,
    FactComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
