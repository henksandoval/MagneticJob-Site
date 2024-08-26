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
  location: 'Portland par 127,Orlando, FL',
  phoneNumber: '+34641051233',
  aliceBarkle: 'alice.barkley',
};

const mockSummary: Summary = {
  about: 'I am a software developer',
  name: 'Brahando test',
  introduction:
    'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
  contact: [mockContactProfile],
};

const mockAcademicBackground: AcademicBackground = {
  experience: 'Master of Fine Arts & Graphic Design',
  startdate: '2015 - 2016',
  Academy: 'Rochester Institute of Technology, Rochester, NY',
  description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.',
};

const mockEducation: Education = {
  academicBackground: [mockAcademicBackground],
};

const mockPosition: Position = {
  specialist: 'Hola',
  startdate: '2010 - Presene',
  location: 'NY',
  communicationDesignLeadership: 'Desarrollo',
  teamLeadership: 'Amor test',
  designQualityAssurance: 'Hello word',
  expertiseArea: '<grafico',
};

const mockWorkExperience: WorkExperience = {
  position: [mockPosition],
};

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
    await checkExpectedTextByTestId('resume', mockTitles.resume);
  });

  it('should show the about', async () => {
    await checkExpectedTextByTestId('about', mockSummary.about);
  });

  it('should show the title summary', async () => {
    await checkExpectedTextByTestId('summary', mockTitles.summary );
  });

  it('should show the name', async () => {
    await checkExpectedTextByTestId('name', mockSummary.name);
  });

  it('should show the introduction', async () => {
    await checkExpectedTextByTestId('introduction', mockSummary.introduction);
  });

  it('should render contact list', async () => {
    await renderComponent();
    mockSummary.contact.forEach((mockContact) => {
      checkText([
        ['experience', mockContact.location],
        ['startdate', mockContact.phoneNumber],
        ['description', mockContact.aliceBarkle]
      ]);
    });
  });

  // it('should show all academic backgrounds', async () => {
  //   mockEducation.academicBackground.forEach((mockEducation) => {
  //      checkText([
  //       ['experience', mockEducation.experience],
  //       ['startdate', mockEducation.startdate],
  //       ['Academy', mockEducation.Academy],
  //       ['description', mockEducation.description]
  //     ]);
  //   })
  // });

  // it('should show all work experiences', async () => {
  //   await checkText([
  //     ['specialist', mockPosition.specialist],
  //     ['startdate', mockPosition.startdate],
  //     ['location', mockPosition.location],
  //     ['communicationDesignLeadership', mockPosition.communicationDesignLeadership],
  //     ['teamLeadership', mockPosition.teamLeadership],
  //     ['designQualityAssurance', mockPosition.designQualityAssurance],
  //     ['expertiseArea', mockPosition.expertiseArea]
  //    ]);
  // });

  async function checkText(expectedPairs: string[][]) {
    for (const [id, text] of expectedPairs) {
      expect(screen.getByTestId(id)).toHaveTextContent(text);
    }
  }

  async function checkExpectedTextByTestId(id: string, expectedText: string) {
    await renderComponent();
    expect(screen.getByTestId(id)).toHaveTextContent(expectedText);
  }
});
