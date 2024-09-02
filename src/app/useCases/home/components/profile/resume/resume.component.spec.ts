import { of } from 'rxjs';
import { ResumeComponent } from './resume.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { Position } from '../../../shared/models/position';
import '@testing-library/jest-dom';
import { AcademicBackground } from '../../../shared/models/academicBackground';

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
};

const renderComponent = async () => {
  await render(ResumeComponent, {
    providers: [provideHttpClientTesting(), { provide: ProfileService, useValue: mockProfileService }],
  });
};

describe('ResumeComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('Must show profile history', () => {
    expect(screen.getByTestId('resume')).toHaveTextContent(mockProfile.titles.resume);
  });

  it('should show the about', () => {
    expect(screen.getByTestId('about')).toHaveTextContent(mockProfile.summary.about);
  });

  it('should show the title summary', () => {
    expect(screen.getByText(mockProfile.titles.summary)).toBeInTheDocument();
  });

  it('should show the name', () => {
    expect(screen.getByTestId('name')).toHaveTextContent(mockProfile.summary.name);
  });

  it('should show the introduction', () => {
    expect(screen.getByTestId('introduction')).toHaveTextContent(mockProfile.summary.introduction);
  });

  it('should render contact list', () => {
    mockProfile.summary.contact.forEach((mockContact) => {
      expect(screen.getByText(mockContact.location)).toBeInTheDocument();
      expect(screen.getByText(mockContact.phoneNumber)).toBeInTheDocument();
      expect(screen.getByText(mockContact.aliceBarkle)).toBeInTheDocument();
    });
  });

  it('You should get all the records about education.', () => {
    mockProfile.education.academicBackground.forEach(
      (academicBackground: AcademicBackground, index: number) => {
        const id: string = (++index).toString().padStart(2, '0');
        expect(screen.getByTestId('experience_' + id)).toHaveTextContent(academicBackground.experience);
        expect(screen.getByTestId('startdate-date' + id)).toHaveTextContent(academicBackground.startdate);
        expect(screen.getByTestId('academy-formation' + id)).toHaveTextContent(academicBackground.Academy);
        expect(screen.getByTestId('description_' + id)).toHaveTextContent(academicBackground.description);
      }
    );
  });

  it('should render all records about work experience', () => {
    mockProfile.workExperience.position.forEach((position: Position, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');
      expect(screen.getByTestId('specialist_' + id)).toHaveTextContent(position.specialist);
      expect(screen.getByTestId('startdate_' + id)).toHaveTextContent(position.startdate);
      expect(screen.getByTestId('location_' + id)).toHaveTextContent(position.location);
      expect(screen.getByTestId('communicationDesignLeadership_' + id)).toHaveTextContent(position.communicationDesignLeadership);
      expect(screen.getByTestId('teamLeadership_' + id)).toHaveTextContent(position.teamLeadership);
      expect(screen.getByTestId('designQualityAssurance_' + id)).toHaveTextContent(position.designQualityAssurance);
      expect(screen.getByTestId('expertiseArea_' + id)).toHaveTextContent(position.expertiseArea);
    });
  });
});
