import { Profile } from '../interfaces/profile';
import { mockSummary } from '../components/summary/mocks/summary.mock';
import { mockAbout } from '../components/about/mocks/about.mock';
import { mockPortfolio } from '../components/portfolio/mocks/portfolio.mock';
import { mockService } from '../components/services/mocks/service.mock';
import { mockSkills } from '../components/skills/mocks/skills.mock';
import { mockTestimonials } from '../components/testimonials/mocks/testimonials.mocks';

export const mockProfile: Profile = {
  about: mockAbout,
  summary: mockSummary,
  skillSet: mockSkills,
  portfolio: mockPortfolio,
  testimonials: mockTestimonials,
  service: mockService,
};
