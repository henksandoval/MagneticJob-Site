import { render, screen } from '@testing-library/angular';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HeaderComponent } from './header.component';
import { MENU_SECTIONS } from './section';

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
    MENU_SECTIONS.forEach((section) => {
      const anchor = screen.getByTestId(`a_${section.target}`);

      anchor.click();
      expect(mockPageScrollService.scroll).toHaveBeenCalledWith({
        document: expect.anything(),
        scrollTarget: `#${section.target}`,
      });
    });
  });

  it('should deactivate all sections and activate the clicked one', () => {
    MENU_SECTIONS.forEach((section) => {
      const anchor = screen.getByTestId(`a_${section.target}`);

      anchor.click();

      MENU_SECTIONS.forEach((sec) => {
        if (sec.target === section.target) {
          expect(sec.isActive).toBe(true);
        } else {
          expect(sec.isActive).toBe(false);
        }
      });
    });
  });
});
