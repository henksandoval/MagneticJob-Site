import { Component, inject } from '@angular/core';
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
import { NgIf } from '@angular/common';

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
  template: `
    <main id="main">
      @let profile = profile$();
      <app-about *ngIf="profile?.about" [aboutSet]="profile!.about" />
      <app-fact *ngIf="profile?.facts" [factSet]="profile!.facts" />
      <app-skills *ngIf="profile?.skillSet" [skillSet]="profile!.skillSet" />
      <app-summary *ngIf="profile?.summary" [summarySet]="profile!.summary" />
      <app-portfolio *ngIf="profile?.portfolio" [portfolioSet]="profile!.portfolio" />
      <app-services *ngIf="profile?.service" [serviceSet]="profile!.service" />
      <app-testimonials *ngIf="profile?.testimonials" [testimonialSet]="profile!.testimonials" />
      <app-contact *ngIf="profile?.contact" [contactSet]="profile!.contact" />
    </main>
  `,
})
export class ProfileComponent {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
