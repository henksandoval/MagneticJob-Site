import { mockWorkExperience } from '../../mocks/mockWorkExperience';
import { mockContactProfile } from '../contact/mockContactProfile';
import { mockEducation } from './mockEducation';
import { Summary } from './summary';

export const mockSummary: Summary = {
  about: 'I am a software developer',
  name: 'Brahando test',
  introduction:
    'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
  contact: [mockContactProfile],
  workExperience: mockWorkExperience,
  education: mockEducation,
};
