import { of } from 'rxjs';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { PortfolioComponent } from './portfolio.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import '@testing-library/jest-dom';
import { WebPage } from '../../../shared/models/webPage';

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
};

const renderComponent = async () => {
  await render(PortfolioComponent, {
    providers: [provideHttpClientTesting(), { provide: ProfileService, useValue: mockProfileService }],
  });
};

describe('PortfolioComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('Must display portfolio title.', () => {
    expect(screen.getByTestId('text')).toHaveTextContent(mockProfile.portfolio.text);
  });

  it('It should show the categories', () => {
    // const entrada: WebPage[] = [
    //   {position: 1, description: 'uno', image: 'uno', link: 'uno', title: 'uno', type: 'color' },
    //   {position: 2, description: 'uno', image: 'uno', link: 'uno', title: 'uno', type: 'web' },
    //   {position: 3, description: 'uno', image: 'uno', link: 'uno', title: 'uno', type: 'web' },
    //   {position: 4, description: 'uno', image: 'uno', link: 'uno', title: 'uno', type: 'color' },
    //   {position: 5, description: 'uno', image: 'uno', link: 'uno', title: 'uno', type: 'color' }
    //  ];

    //  const salida: string[] = ['color', 'web'];

    const resultadoEsperado: string[] = ['CAT', 'NATURE', 'MARRIES'];
    //   <ul id="portfolio-flters">
    //   <li data-testid="all" data-filter="*" class="filter-active">All</li>
    //   <li data-filter=".filter-app">App</li>
    //   <li data-filter=".filter-web">Web</li>
    // </ul>
    resultadoEsperado.forEach((filter: string) => {
      expect(screen.getByTestId('filter_' + filter)).toHaveAttribute('data-filter', '.filter-' + filter);
    });
  });

  it('You must submit all records regarding the portfolio.', () => {
    mockProfile.portfolio.webPage.forEach((webPage: WebPage, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');
      expect(screen.getByTestId('image-src_' + id)).toHaveAttribute('src', webPage.image);
      expect(screen.getByTestId('position_' + id)).toHaveTextContent(webPage.position.toString());
      expect(screen.getByTestId('title_' + id)).toHaveTextContent(webPage.title);
      expect(screen.getByTestId('type_' + id)).toHaveTextContent(webPage.type);
      expect(screen.getByTestId('description_' + id)).toHaveTextContent(webPage.description);
      expect(screen.getByTestId('image-href' + id)).toHaveAttribute('href', webPage.image);
      expect(screen.getByTestId('link_' + id)).toHaveAttribute('href', webPage.link);
    });
  });
});
