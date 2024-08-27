import { Facts } from './facts';
import { WorkExperience } from './workExperience';
import { About } from './about';
import { Contact } from './contact';
import { Education } from './education';
import { Skills } from './skills';
import { Summary } from './summary';
import { Titles } from './titles';
import { PortFolio } from './portfolio';

export interface Profile {
  birthday?: string;
  contact?: Contact;
  about: About;
  facts?: Facts;
  skills?: Skills;
  titles: Titles;
  workExperience: WorkExperience;
  education: Education;
  summary: Summary;
  portfolio: PortFolio;
}
