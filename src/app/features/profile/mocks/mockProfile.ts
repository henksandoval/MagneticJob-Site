import { Profile } from '../interfaces/profile';
import { mockAbout } from '../components/about/mockAbout';
import { mockSkills } from '../components/skills/mockSkills';
import { mockPortfolio } from '../components/portfolio/mockPortfolio';
import { mockTestimonials } from '../components/testimonials/mockTestimonials';
import { mockService } from '../components/services/mockService';
import { mockSummary } from '../components/summary/mockSummary';
import { mockEducation } from '../components/summary/mockEducation';

export const mockProfile: Profile = {
  about: mockAbout,
  summary: mockSummary,
  education: mockEducation,
  skillSet: mockSkills,
  portfolio: mockPortfolio,
  testimonials: mockTestimonials,
  service: mockService,
};
