import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { WebPage } from '../../../shared/models/webPage';
import { delay, map, tap } from 'rxjs';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
  webPages: WebPage[] = [];
  webPagesByTypes: string[] = [];

  ngOnInit(): void {
    this.profile$
      .pipe(
        map((profile) => profile?.portfolio?.webPage ?? []),
        tap((webPages) => {
          this.webPages = this.sortWebPages(webPages);
          this.webPagesByTypes = this.groupWebPagesByType(webPages);
        }),
        delay(1500),
        tap(() => this.initializeGLightbox())
      )
      .subscribe();
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
