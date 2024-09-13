import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { WebPage } from '../../../shared/models/webPage';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styles: ``,
})
export class PortfolioComponent implements OnInit {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
  type!: string;
  webPages: WebPage[] = [];

  ngOnInit(): void {
    this.profile$.subscribe((profile) => {
      if (profile && profile.portfolio) {
        this.webPages = profile.portfolio.webPage;
        this.webPages = this.obtenerLosTipos();
      }
    });
  }

  obtenerLosTipos(): WebPage[] {
    const unicos: string[] = [];
    return this.webPages.reduce((reduciendo, valor) => {
      if (!unicos.includes(valor.type)) {
        unicos.push(valor.type);
        reduciendo.push({ type: valor.type, position: 1, title: '', description: '', link: '', image: '' });
      }
      return reduciendo;
    }, [] as WebPage[]);
  }

  filterType(type: string) {
    if (type) {
      this.webPages.filter((webPage) => webPage.type === type);
    }
    return type;
  }
}
