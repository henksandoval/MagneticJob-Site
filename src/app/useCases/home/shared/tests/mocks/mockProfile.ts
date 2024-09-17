import { Profile } from '../../../shared/models/profile';
import { mockAbout } from '../../../shared/tests/mocks/mockAbout';
import { mockSummary } from './mockSummary';
import { mockTitles } from './mockTitles';
import { mockEducation } from './mockEducation';
import { mockWorkExperience } from './mockWorkExperience';
import { mockPortfolio } from './mockPortfolio';
import { mockTestimonials } from './mockTestimonials';
import { mockSkills } from './mockSkills';
import { mockService } from '../../../components/profile/services/services.component.spec';

export const mockProfile: Profile = {
  about: mockAbout,
  titles: mockTitles,
  summary: mockSummary,
  education: mockEducation,
  workExperience: mockWorkExperience,
  skillSet: mockSkills,
  portfolio: mockPortfolio,
  testimonials: mockTestimonials,
  service: mockService
};
