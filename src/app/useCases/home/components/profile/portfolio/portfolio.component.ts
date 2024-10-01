import { NgClass } from '@angular/common';
import { Component, Signal, computed, effect, inject } from '@angular/core';
import GLightbox from 'glightbox';
import { Profile } from 'src/app/useCases/home/shared/models/profile';
import { WebPage } from '../../../shared/models/webPage';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$: Signal<Profile | null> = this.profileService.profile$;

  webPages = computed(() => {
    const webPages = this.profile$()?.portfolio?.webPage ?? [];
    return this.sortWebPages(webPages);
  });

  webPagesByTypes = computed(() => {
    const webPages = this.profile$()?.portfolio?.webPage ?? [];
    return this.groupWebPagesByType(webPages);
  });

  constructor() {
    effect(() => {
      if (this.profile$()) {
        setTimeout(() => {
          this.initializeGLightbox();
        }, 1500);
      }
    });
  }

  private sortWebPages(webPages: WebPage[]): WebPage[] {
    return [...webPages].sort((a, b) => a.position - b.position);
  }

  private groupWebPagesByType(webPages: WebPage[]): string[] {
    return Array.from(new Set(webPages.map((webPage) => webPage.type)));
  }

  private initializeGLightbox(): void {
    GLightbox({ selector: '.glightbox-image' });
    GLightbox({ selector: '.glightbox-web', width: '90%', height: '90vh' });
  }
}
