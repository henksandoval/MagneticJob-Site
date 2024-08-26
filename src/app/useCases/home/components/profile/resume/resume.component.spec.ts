import { of } from 'rxjs';
import { ResumeComponent } from './resume.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { Titles } from '../../../shared/models/titles';
import { Position } from '../../../shared/models/position';
import '@testing-library/jest-dom';


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

  it('should render all records about work experience', () => {
    mockProfile.workExperience.position.forEach((position: Position, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');
      expect(screen.getByTestId('specialist_' + id)).toHaveTextContent(position.specialist);
    });
  });
});
