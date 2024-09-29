import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/useCases/home/shared/services/profile/profile.service';
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
    <main id="main">
      <app-about />
      <app-fact />
      <app-skills [skillSet]="profile$()?.skillSet" />
      <app-resume />
      <app-portfolio />
      <app-services />
      <app-testimonials [testimonials]="profile$()?.testimonials" />
      <app-contact />
    </main>
  `,
})
export class ProfileComponent implements OnInit {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;

  ngOnInit(): void {
    this.profileService.loadProfile();
  }
}
