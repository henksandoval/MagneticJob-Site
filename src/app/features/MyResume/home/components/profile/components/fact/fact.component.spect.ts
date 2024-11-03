import {render, screen} from '@testing-library/angular';
import {FactComponent} from "./fact.component";
import {mockFact} from "./mocks/fact.mock";

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

  it('should show facts section', () => {
    expect(screen.getByTestId('factDescription')).toHaveTextContent(mockFact.description);
  });
});
