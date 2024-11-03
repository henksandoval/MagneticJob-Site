import { render, screen } from '@testing-library/angular';
import { FactComponent } from './fact.component';
import { mockFact } from './mocks/fact.mock';
import '@testing-library/jest-dom';
import '@angular/localize/init';

const renderComponent = async () => {
  await render(FactComponent, {
    inputs: {
      factSet: mockFact,
    },
  });
};

describe(FactComponent.name, () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('should show facts section when factSet is provided', () => {
    screen.debug();

    expect(screen.getByTestId('factDescription')).toHaveTextContent(mockFact.description);
  });
});
