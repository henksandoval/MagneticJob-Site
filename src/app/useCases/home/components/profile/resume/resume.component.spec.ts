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
import { Education } from '../../../shared/models/education';
import { AcademicBackground } from '../../../shared/models/academicBackground';
import { WorkExperience } from '../../../shared/models/workExperience';
import { Position } from '../../../shared/models/position';

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
  introduction: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
  contact: [mockContactProfile],
};

const mockAcademicBackground: AcademicBackground = {
  experience:'Master of Fine Arts & Graphic Design, test',
    startdate: '2015 - 2012000',
    Academy: 'Rochester Institute',
    description: 'Qui deserunt veniam.'
}

const mockEducation: Education = {
  academicBackground: [mockAcademicBackground]
}

const mockPosition: Position = {
  specialist: '',
  startdate: '',
  location: '',
  communicationDesignLeadership: '',
  teamLeadership: '',
  designQualityAssurance: '',
  expertiseArea: ''
}

const mockWorkExperience: WorkExperience = {
  position: [mockPosition]
}

const mockProfile: Profile = {
  titles: mockTitles,
  summary: mockSummary,
  education: mockEducation,
  workExperience: mockWorkExperience,
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

  it('should show the name', async () => {
    await renderComponent();
    expect(screen.getByTestId('name')).toHaveTextContent(mockSummary.name);
  });

  it('should show the introduction', async () => {
    await renderComponent();
    expect(screen.getByTestId('introduction')).toHaveTextContent(mockSummary.introduction);
  });

  it('should render contact list', async () => {
    await renderComponent();
    mockSummary.contact.forEach( mockContact=> {
      expect(screen.getByText(mockContact.location)).toBeInTheDocument();
      expect(screen.getByText(mockContact.phoneNumber)).toBeInTheDocument();
      expect(screen.getByText(mockContact.aliceBarkle)).toBeInTheDocument();
    });
  });

  it('should show all academic backgrounds', async () => {
    await renderComponent();
    mockEducation.academicBackground.forEach(mockEducation => {
      expect(screen.getByText(mockEducation.experience)).toBeInTheDocument();
      expect(screen.getByText(mockEducation.startdate)).toBeInTheDocument();
      expect(screen.getByText(mockEducation.Academy)).toBeInTheDocument();
      expect(screen.getByText(mockEducation.description)).toBeInTheDocument();
    });
  });

  it('should show all work experiences', async () => {
    for (const mockPosition of mockWorkExperience.position) {
      expect(await screen.findByText(mockPosition.specialist)).toBeInTheDocument();
      expect(await screen.findByText(mockPosition.startdate)).toBeInTheDocument();
      expect(await screen.findByText(mockPosition.location)).toBeInTheDocument();
      expect(await screen.findByText(mockPosition.communicationDesignLeadership)).toBeInTheDocument();
      expect(await screen.findByText(mockPosition.teamLeadership)).toBeInTheDocument();
      expect(await screen.findByText(mockPosition.designQualityAssurance)).toBeInTheDocument();
      expect(await screen.findByText(mockPosition.expertiseArea)).toBeInTheDocument();
    }
  });
});

