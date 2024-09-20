import { render, screen } from '@testing-library/angular';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HeaderComponent } from './header.component';
import { SECTIONS } from './section';

const mockPageScrollService = {
  scroll: jest.fn(),
};

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await render(HeaderComponent, {
      providers: [{ provide: PageScrollService, useValue: mockPageScrollService }],
    });
  });

  it('should set an anchor by each section defined', () => {
    SECTIONS.forEach((section) => {
      const anchor = screen.getByTestId(`a_${section.target}`);

      anchor.click();
      expect(mockPageScrollService.scroll).toHaveBeenCalledWith({
        document: expect.anything(),
        scrollTarget: `#${section.target}`,
      });
    });
  });
});
