import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { WebPage } from '../../../shared/models/webPage';

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
    this.profile$.subscribe((profile) => {
      if (profile?.portfolio) {
        this.webPages = profile.portfolio.webPage;
        this.groupWebPagesByType();
      }
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
