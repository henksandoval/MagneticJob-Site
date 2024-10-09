import { Education } from '../summary/education';
import { WorkExperience } from '../summary/workExperience';
import { ContactProfile } from './contactProfile';

export interface Summary {
  about: string;
  name: string;
  introduction: string;
  contact: ContactProfile[];
  education: Education;
  workExperience: WorkExperience;
}
