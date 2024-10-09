import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { CoverComponent } from '../../shared/layout/cover/cover.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FactComponent } from './components/fact/fact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileService } from './services/profile.service';

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
    SummaryComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  template: `
    <main id="main">
      <app-about />
      <app-fact />
      <app-skills [skillSet]="profile$()?.skillSet" />
      <app-summary [summarySet]="profile$()?.summary" />
      <app-portfolio [portfolioSet]="profile$()?.portfolio" />
      <app-services />
      <app-testimonials [testimonials]="profile$()?.testimonials" />
      <app-contact />
    </main>
  `,
})
export class ProfileComponent implements OnInit {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;

  ngOnInit(): void {
    this.profileService.loadProfile();
  }
}
