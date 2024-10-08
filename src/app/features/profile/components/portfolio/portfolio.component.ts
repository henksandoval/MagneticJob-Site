import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import GLightbox from 'glightbox';
import { Gallery } from '../../interfaces/webPage';
import { PortFolio } from './portfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  portfolioSet = input.required<PortFolio | undefined>();

  webPages = computed(() => {
    const gallery = this.portfolioSet()?.gallery ?? [];
    return this.sortWebPages(gallery);
  });

  webPagesByTypes = computed(() => {
    const gallery = this.portfolioSet()?.gallery ?? [];
    return this.groupWebPagesByType(gallery);
  });

  constructor() {
    effect(() => {
      if (this.portfolioSet()) {
        setTimeout(() => {
          this.initializeGLightbox();
        }, 1500);
      }
    });
  }

  private sortWebPages(webPages: Gallery[]): Gallery[] {
    return [...webPages].sort((a, b) => a.position - b.position);
  }

  private groupWebPagesByType(webPages: Gallery[]): string[] {
    return Array.from(new Set(webPages.map((webPage) => webPage.type)));
  }

  private initializeGLightbox(): void {
    GLightbox({ selector: '.glightbox-image' });
    GLightbox({ selector: '.glightbox-web', width: '90%', height: '90vh' });
  }
}
