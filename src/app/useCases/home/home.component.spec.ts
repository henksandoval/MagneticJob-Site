import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { ProfileService } from './shared/services/profile/profile.service';

const mockProfileService = {
  getProfile: jest.fn().mockReturnValue(of({ name: 'Test User' })),
  loadProfile: jest.fn(),
};

describe('HomeComponent', () => {
  it('should render the component with its subcomponents', async () => {
    await render(HomeComponent, {
      providers: [
        provideHttpClientTesting(),
        { provide: ProfileService, useValue: mockProfileService },
      ],
    });

    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('cover')).toBeTruthy();
    expect(screen.getByTestId('profile')).toBeTruthy();
    expect(screen.getByTestId('footer')).toBeTruthy();
  });
});
