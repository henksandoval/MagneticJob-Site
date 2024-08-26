import { AcademicBackground } from '../../models/academicBackground';
import { Education } from '../../models/education';

export const mockAcademicBackground: AcademicBackground = {
  experience: 'Master of Fine Arts & Graphic Design',
  startdate: '2015 - 2016',
  Academy: 'Rochester Institute of Technology, Rochester, NY',
  description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend',
};

export const mockEducation: Education = {
  academicBackground: [mockAcademicBackground],
};
