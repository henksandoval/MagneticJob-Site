import { of } from 'rxjs';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import '@testing-library/jest-dom';
import { SkillsComponent } from './skills.component';
import { SkillDetail } from '../../../shared/models/skills';

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
};

const renderComponent = async () => {
  await render(SkillsComponent, {
    providers: [provideHttpClientTesting(), { provide: ProfileService, useValue: mockProfileService }],
  });
};

describe('SkillsComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('Must display Skills title.', () => {
    expect(screen.getByTestId('skill_overview')).toHaveTextContent(mockProfile.skillSet!.overview);
  });

  it('You must submit all records regarding the Skills.', () => {
    mockProfile.skillSet!.skillDetails.forEach((skill: SkillDetail, index: number) => {
      const id: string = (++index).toString().padStart(2, '0');
      expect(screen.getByTestId('image-src_' + id)).toHaveAttribute('src', skill.iconUrl);
      expect(screen.getByTestId('name_' + id)).toHaveTextContent(skill.name);
    });
  });
});
