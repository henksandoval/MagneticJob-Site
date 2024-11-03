import { mockContact } from '../../contact/mocks/contact-profile.mock';
import { Summary } from '../interfaces/summary';
import { mockEducation } from './education.mock';
import { mockWorkExperience } from './workExperience.mock';

export const mockSummary: Summary = {
  about: 'I am a software developer',
  name: 'Brahando test',
  introduction:
    'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
  contactProfile: mockContact,
  workExperience: mockWorkExperience,
  education: mockEducation,
};
