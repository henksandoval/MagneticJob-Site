import { Component, inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { SECTIONS } from './section';
import { DOCUMENT, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sections = SECTIONS;
  activeSectionId = 'hero';

  private readonly pageScrollService: PageScrollService = inject(PageScrollService);
  private readonly document: Document = inject(DOCUMENT);

  scrollTo(target: string) {
    this.activeSectionId = target;
    this.pageScrollService.scroll({ document: this.document, scrollTarget: `#${this.activeSectionId}` });
  }
}
