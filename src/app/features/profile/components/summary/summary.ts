import { ContactProfile } from '../contact/contactProfile';
import { Education } from './education';
import { WorkExperience } from './workExperience';

export interface Summary {
  about: string;
  name: string;
  introduction: string;
  contact: ContactProfile[];
  workExperience: WorkExperience;
  education: Education;
}
