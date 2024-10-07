import { Profile } from '../interfaces/profile';
import { mockAbout } from '../components/about/mockAbout';
import { mockTitles } from './mockTitles';
import { mockSummary } from './mockSummary';
import { mockEducation } from './mockEducation';
import { mockWorkExperience } from './mockWorkExperience';
import { mockSkills } from '../components/skills/mockSkills';
import { mockPortfolio } from '../components/portfolio/mockPortfolio';
import { mockTestimonials } from '../components/testimonials/mockTestimonials';
import { mockService } from '../components/services/mockService';

export const mockProfile: Profile = {
  about: mockAbout,
  titles: mockTitles,
  summary: mockSummary,
  education: mockEducation,
  workExperience: mockWorkExperience,
  skillSet: mockSkills,
  portfolio: mockPortfolio,
  testimonials: mockTestimonials,
  service: mockService,
};
