import { of } from 'rxjs';
import { Profile } from '../../../shared/models/profile';
import { Titles } from '../../../shared/models/titles';
import { ResumeComponent } from './resume.component';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';

const mockTitles: Titles = {
  resume: 'Historial test',
  summary: 'Sumaria',
  education: 'Educacion',
  workExperience: 'Experiencia profesional',
};

const mockProfile: Profile = {
  titles: mockTitles,
};

const mockProfileService = {
  profile$: of(mockProfile),
};

const renderComponent = async () => {
  await render(ResumeComponent, {
    providers: [
        provideHttpClientTesting(),
        {provide: ProfileService, useValue: mockProfileService}
    ],
  });
};

describe('ResumeComponent', () => {
    it('Must show profile history', async () => {
        await renderComponent();
        expect(screen.getByText('resume')).toHaveTextContent(mockTitles.resume);
    })
})