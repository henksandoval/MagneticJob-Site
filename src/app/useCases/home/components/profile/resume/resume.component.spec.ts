import { of } from 'rxjs';
import { Profile } from '../../../shared/models/profile';
import { Titles } from '../../../shared/models/titles';
import { ResumeComponent } from './resume.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import '@testing-library/jest-dom';
import { Summary } from '../../../shared/models/summary';
import { ContactProfile } from '../../../shared/models/contactProfile';

const mockTitles: Titles = {
  resume: 'Historial test',
  summary: 'Sumaria',
  education: 'Educacion',
  workExperience: 'Experiencia profesional',
};

const mockContactProfile: ContactProfile = {
  location: 'Porland test',
  phoneNumber: '+34641051233',
  aliceBarkle: 'Alice Barkle test',
};

const mockSummary: Summary = {
  about: 'I am a software developer',
  name: 'Brahando test',
  Introduction: 'Innovative and deadline-driven Graphic Designer with 3+ years ',
  contact: [mockContactProfile],
};

const mockProfile: Profile = {
  titles: mockTitles,
  summary: mockSummary,
};

const mockProfileService = {
  profile$: of(mockProfile),
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
    expect(screen.getByTestId('about')).toHaveTextContent(mockSummary.about);
  });

  it('should show the title summary', async () => {
    await renderComponent();
    expect(screen.getByText(mockTitles.summary)).toBeInTheDocument();
  });

});
