import { of } from 'rxjs';
import { ResumeComponent } from './resume.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { Titles } from '../../../shared/models/titles';
import '@testing-library/jest-dom';

const mockTitles: Titles = {
  resume: 'Historial test',
  summary: 'Sumaria',
  education: 'Educacion',
  workExperience: 'Experiencia profesional',
};

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
};

const renderComponent = async () => {
  await render(ResumeComponent, {
    providers: [
      provideHttpClientTesting(),
      { provide: ProfileService, useValue: mockProfileService },
    ],
  });
};

describe('ResumeComponent', () => {
  it('Must show profile history', async () => {
    await renderComponent();
    expect(screen.getByTestId('resume')).toHaveTextContent(mockTitles.resume);
  });

  it('should show the about', async () => {
    await renderComponent();
    expect(screen.getByTestId('about')).toHaveTextContent(mockProfile.summary.about);
  });

  it('should show the title summary', async () => {
    await renderComponent();
    expect(screen.getByText(mockTitles.summary)).toBeInTheDocument();
  });

  it('should show the name', async () => {
    await renderComponent();
    expect(screen.getByTestId('name')).toHaveTextContent(mockProfile.summary.name);
  });

  it('should show the introduction', async () => {
    await renderComponent();
    expect(screen.getByTestId('introduction')).toHaveTextContent(mockProfile.summary.introduction);
  });

  it('should render contact list', async () => {
    await renderComponent();
    mockProfile.summary.contact.forEach((mockContact) => {
      expect(screen.getByText(mockContact.location)).toBeInTheDocument();
      expect(screen.getByText(mockContact.phoneNumber)).toBeInTheDocument();
      expect(screen.getByText(mockContact.aliceBarkle)).toBeInTheDocument();
    });
  });
});
