import '@angular/localize/init';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ContactComponent } from './contact.component';
import { mockContact } from './mocks/contactProfile.mock';

const renderComponent = async () => {
  await render(ContactComponent, {
    inputs: {
      contactSet: mockContact,
    },
  });
};

describe('ContactComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('should display contact data correctly', () => {
    expect(screen.getByTestId('email')).toHaveTextContent(mockContact.email);
    expect(screen.getByTestId('phoneNumber')).toHaveTextContent(mockContact.phoneNumber);
    expect(screen.getByTestId('direction')).toHaveTextContent(mockContact.direction);
  });
});

describe('ContactComponentNullScenary', () => {
  it('handles undefined correctly', async () => {
    await render(ContactComponent, {
      inputs: {
        contactSet: undefined,
      },
    });

    expect(screen.getByTestId('contact')).toBeEmptyDOMElement();
  });
});
