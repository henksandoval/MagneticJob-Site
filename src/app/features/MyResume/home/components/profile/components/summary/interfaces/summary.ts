import { Contact } from '../../contact/interfaces/contact';
import { Education } from './education';
import { WorkExperience } from './work-experience';

export interface Summary {
  about: string;
  name: string;
  introduction: string;
  contactProfile: Contact;
  education: Education;
  workExperience: WorkExperience;
}
