import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { PortfolioComponent } from './portfolio.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import '@testing-library/jest-dom';
import { WebPage } from '../../../shared/models/webPage';
import { signal } from '@angular/core';

const mockProfileService = {
  profile$: signal(mockProfile),
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

  it('I should filter by type', () => {
    mockProfile.portfolio.webPage.forEach((webPage) => {
      expect(screen.getByTestId('filter_' + webPage.type)).toHaveTextContent(webPage.type);
      expect(screen.getByTestId('filter_' + webPage.type)).toHaveAttribute(
        'data-filter',
        '.filter-' + webPage.type
      );
    });
  });

  it('Should submit all records regarding the portfolio.', () => {
    mockProfile.portfolio.webPage.forEach((webPage: WebPage, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');

      expect(screen.getByTestId('image-src_' + id)).toHaveAttribute('src', webPage.image);
      expect(screen.getByTestId('title_' + id)).toHaveTextContent(webPage.title);
      expect(screen.getByTestId('type_' + id)).toHaveTextContent(webPage.type);
      expect(screen.getByTestId('description_' + id)).toHaveTextContent(webPage.description);
      if (webPage.image) {
        expect(screen.queryByTestId('image_' + id)).toHaveAttribute('href', webPage.image);
      }
      if (webPage.video) {
        expect(screen.queryByTestId('video_' + id)).toHaveAttribute('href', webPage.video);
      }
      if (webPage.link) {
        expect(screen.getByTestId('link_' + id)).toHaveAttribute('href', webPage.link);
      }
    });
  });
});

describe('PortfolioComponentNullScenary', () => {
  it('handles null or undefined profile correctly', async () => {
    const mockNullProfileService = {
      profile$: signal(null),
    };

    await render(PortfolioComponent, {
      providers: [provideHttpClientTesting(), { provide: ProfileService, useValue: mockNullProfileService }],
    });

    screen.debug();
    expect(screen.getByTestId('portfolio')).toBeEmptyDOMElement();
  });
});
