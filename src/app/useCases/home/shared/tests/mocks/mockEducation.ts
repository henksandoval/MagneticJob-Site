import { AcademicBackground } from '../../models/academicBackground';
import { Education } from '../../models/education';

export const mockAcademicBackground: AcademicBackground = {
  experience: 'Master of Fine Arts & Graphic Design, test',
  startdate: '2015 - 2012000',
  Academy: 'Rochester Institute',
  description: 'Qui deserunt veniam.',
};

export const mockEducation: Education = {
  academicBackground: [mockAcademicBackground],
};
