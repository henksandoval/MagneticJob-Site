import { of } from 'rxjs';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ServicesComponent } from './services.component';

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
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

});
