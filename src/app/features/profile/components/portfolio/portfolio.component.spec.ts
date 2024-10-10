import { PortfolioComponent } from './portfolio.component';
import { render, screen } from '@testing-library/angular';
import { mockProfile } from '../../mocks/profile.mock';
import { mockPortfolio } from './mocks/portfolio.mock';
import { Gallery } from './interfaces/gallery';
import '@testing-library/jest-dom';
import '@angular/localize/init';

const renderComponent = async () => {
  await render(PortfolioComponent, {
    inputs: {
      portfolioSet: mockPortfolio,
    },
  });
};

describe('PortfolioComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('I should filter by type', () => {
    mockProfile.portfolio.gallery.forEach((webPage) => {
      expect(screen.getByTestId('filter_' + webPage.type)).toHaveTextContent(webPage.type);
      expect(screen.getByTestId('filter_' + webPage.type)).toHaveAttribute(
        'data-filter',
        '.filter-' + webPage.type
      );
    });
  });

  it('Should submit all records regarding the portfolio.', () => {
    mockProfile.portfolio.gallery.forEach((gallery: Gallery, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');

      expect(screen.getByTestId('image-src_' + id)).toHaveAttribute('src', gallery.image);
      expect(screen.getByTestId('title_' + id)).toHaveTextContent(gallery.title);
      expect(screen.getByTestId('type_' + id)).toHaveTextContent(gallery.type);
      expect(screen.getByTestId('description_' + id)).toHaveTextContent(gallery.description);
      if (gallery.image) {
        expect(screen.queryByTestId('image_' + id)).toHaveAttribute('href', gallery.image);
      }
      if (gallery.video) {
        expect(screen.queryByTestId('video_' + id)).toHaveAttribute('href', gallery.video);
      }
      if (gallery.link) {
        expect(screen.getByTestId('link_' + id)).toHaveAttribute('href', gallery.link);
      }
    });
  });
});

describe('PortfolioComponentNullScenary', () => {
  it('handles undefined correctly', async () => {
    await render(PortfolioComponent, {
      inputs: {
        portfolioSet: undefined,
      },
    });

    expect(screen.getByTestId('portfolio')).toBeEmptyDOMElement();
  });
});
