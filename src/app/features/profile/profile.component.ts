import { Component, inject, model } from '@angular/core';
import { HeaderComponent } from '../../shared/layouts/header/header.component';
import { CoverComponent } from '../../shared/layouts/cover/cover.component';
import { FooterComponent } from '../../shared/layouts/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FactComponent } from './components/fact/fact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileService } from './services/profile.service';
import { NgIf } from '@angular/common';
import { MenuSection } from 'src/app/shared/layouts/header/interfaces/menu-section';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    CoverComponent,
    FooterComponent,
    AboutComponent,
    FactComponent,
    SkillsComponent,
    SummaryComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
  sections = model<Map<string, MenuSection>>();
}
