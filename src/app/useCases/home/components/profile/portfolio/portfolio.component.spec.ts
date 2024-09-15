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

  it('I should filter by type', () => {
    mockProfile.portfolio.webPage.forEach((webPage) => {
      expect(screen.getByTestId('filter_' + webPage.type )).toHaveTextContent(webPage.type);
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
