import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AboutComponent } from './about.component';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { mockAbout } from '../../../shared/tests/mocks/mockAbout';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import '@testing-library/jest-dom';

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
};

const renderComponent = async () => {
  await render(AboutComponent, {
    providers: [
      provideHttpClientTesting(),
      { provide: ProfileService, useValue: mockProfileService },
    ],
  });
};

describe('AboutComponent', () => {
  it('should display profile description', async () => {
    await checkTextContentByTestId('description', mockAbout.description);
  });

  it('should display profile text', async () => {
    await checkTextContentByTestId('about-tittle', mockAbout.text);
  });

  it('should display profile hobbies', async () => {
    await checkTextContentByTestId('hobbies', mockAbout.hobbies);
  });

  it('should display profile birthday', async () => {
    await checkTextContentByTestId('birthday', mockAbout.birthday);
  });

  it('should display profile website', async () => {
    await checkTextContentByTestId('website', mockAbout.website);
  });

  it('should display profile phone number', async () => {
    await checkTextContentByTestId('phoneNumber', mockAbout.phoneNumber.toString());
  });

  it('should display profile city', async () => {
    await checkTextContentByTestId('city', mockAbout.city);
  });

  it('should display profile age', async () => {
    await checkTextContentByTestId('age', mockAbout.age.toString());
  });

  it('should display profile degree', async () => {
    await checkTextContentByTestId('degree', mockAbout.degree);
  });

  it('should display profile email', async () => {
    await checkTextContentByTestId('email', mockAbout.email);
  });

  it('should display profile freelance status', async () => {
    await checkTextContentByTestId('freelance-status', mockAbout.freelance);
  });

  it('should display profile work experience', async () => {
    await checkTextContentByTestId('workExperience', mockAbout.workExperience);
  });
});

async function checkTextContentByTestId(id: string, expectedTextContent: string) {
  await renderComponent();
  expect(screen.getByTestId(id)).toHaveTextContent(expectedTextContent);
}
