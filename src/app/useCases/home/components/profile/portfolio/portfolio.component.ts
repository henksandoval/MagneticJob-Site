import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { WebPage } from '../../../shared/models/webPage';
import { delay, map } from 'rxjs';
import GLightbox from 'glightbox';
import { Profile } from '../../../shared/models/profile';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
  webPages: WebPage[] = [];
  webPagesByTypes: string[] = [];

  ngOnInit(): void {
    this.profile$
      .pipe(
        map((profile) => {
          if (profile?.portfolio) {
            this.sortWebPages(profile);
            this.groupWebPagesByType();
          }

          return profile;
        }),
        delay(3000)
      )
      .subscribe(() => {
        GLightbox({
          selector: '.glightbox-image',
        });
        GLightbox({
          selector: '.glightbox-web',
          width: '90%',
          height: '90vh',
        });
      });
  }

  private sortWebPages(profile: Profile) {
    this.webPages = profile.portfolio.webPage.sort((current: WebPage, next: WebPage) => {
      if (current.position > next.position) {
        return 1;
      }

      if (current.position < next.position) {
        return -1;
      }

      return 0;
    });
  }

  private groupWebPagesByType() {
    this.webPages.forEach((webPage: WebPage) => {
      if (this.webPagesByTypes.includes(webPage.type)) {
        return;
      }
      this.webPagesByTypes.push(webPage.type);
    });
  }
}
