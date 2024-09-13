import { Profile } from '../../../shared/models/profile';
import { mockAbout } from '../../../shared/tests/mocks/mockAbout';
import { mockSummary } from './mockSummary';
import { mockTitles } from './mockTitles';
import { mockEducation } from './mockEducation';
import { mockWorkExperience } from './mockWorkExperience';
import { mockPortfolio } from './mockPortfolio';
import { mockTestimonials } from './mockTestimonials';

export const mockProfile: Profile = {
  about: mockAbout,
  titles: mockTitles,
  summary: mockSummary,
  education: mockEducation,
  workExperience: mockWorkExperience,
  portfolio: mockPortfolio,
  testimonials: mockTestimonials,
};
