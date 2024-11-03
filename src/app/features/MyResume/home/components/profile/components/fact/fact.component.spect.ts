import { render, screen } from '@testing-library/angular';
import { FactComponent } from './fact.component';
import { mockFact } from './mocks/fact.mock';
import { Facts } from './interfaces/facts';

const renderComponent = async (factSet: Facts | undefined) => {
  await render(FactComponent, {
    inputs: {
      factSet,
    },
  });
};

describe(FactComponent.name, () => {
  it('should show facts section when factSet is provided', async () => {
    await renderComponent(mockFact);
    expect(screen.getByTestId('factDescription')).toHaveTextContent(mockFact.description);
  });

  it('should handle undefined factSet', async () => {
    await renderComponent(undefined);
    expect(screen.queryByTestId('factDescription')).toBeNull();
  });
});
