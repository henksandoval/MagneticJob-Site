import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ServicesComponent } from './services.component';
import { ServiceDetails } from '../../../shared/models/service';
import { signal } from '@angular/core';

const mockProfileService = {
  profile$: signal(mockProfile),
};

const renderComponent = async () => {
  await render(ServicesComponent, {
    providers: [provideHttpClientTesting(), { provide: ProfileService, useValue: mockProfileService }],
  });
};

describe('ServicesComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('It should show the title in the view', () => {
    expect(screen.getByTestId('text')).toHaveTextContent(mockProfile.service.title);
  });

  it('It should show overview in the view', () => {
    expect(screen.getByTestId('overview')).toHaveTextContent(mockProfile.service.overview);
  });

  it('It should show the list of services', () => {
    mockProfile.service.serviceDetails.forEach((serviceDetails: ServiceDetails, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');
      expect(screen.getByTestId('name_' + id)).toHaveTextContent(serviceDetails.name);
      expect(screen.getByTestId('description_' + id)).toHaveTextContent(serviceDetails.description);
      expect(screen.getByTestId('backgroundUrl_' + id)).toHaveAttribute('src', serviceDetails.backgroundUrl);
    });
  });
});
