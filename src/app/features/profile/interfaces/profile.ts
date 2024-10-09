import { Contact } from '../components/contact/contact';
import { About } from '../components/about/about';
import { Facts } from '../components/fact/facts';
import { SkillSet } from '../components/skills/skills';
import { Testimonial } from '../components/testimonials/testimonial';
import { PortFolio } from '../components/portfolio/portfolio';
import { Service } from '../components/services/service';
import { Summary } from '../components/contact/summary';
import { Education } from '../components/summary/education';

export interface Profile {
  birthday?: string;
  contact?: Contact;
  about: About;
  facts?: Facts;
  skillSet?: SkillSet;
  education: Education;
  summary: Summary;
  testimonials: Testimonial[];
  portfolio: PortFolio;
  service: Service;
}
