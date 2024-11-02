import { render, screen } from '@testing-library/angular';
import { AppIdDirective } from './app-id.directive';
import '@testing-library/jest-dom';

describe(AppIdDirective.name, () => {
  it('should set the id and data-testid attributes', async () => {
    const idValue = 'test-id';

    await render(`<div appId="${idValue}"></div>`, {
      imports: [AppIdDirective],
      componentProperties: {
        appId: idValue,
      },
    });

    const divElement = screen.getByTestId(idValue);

    expect(divElement).toHaveAttribute('id', idValue);
    expect(divElement).toHaveAttribute('data-testid', idValue);
  });
});
