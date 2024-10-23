import { Component, inject, model } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT, JsonPipe, NgClass, NgFor } from '@angular/common';
import { menuSection } from 'src/app/features/home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgFor, JsonPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections = model<any>();
  activeSectionId = 'hero';

  private readonly pageScrollService: PageScrollService = inject(PageScrollService);
  private readonly document: Document = inject(DOCUMENT);

  setActive(section: menuSection) {
    section.isActive = true;
  }

  scrollTo(target: string) {
    this.activeSectionId = target;
    this.pageScrollService.scroll({ document: this.document, scrollTarget: `#${this.activeSectionId}` });
  }
}
