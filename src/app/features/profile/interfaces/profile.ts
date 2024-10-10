import { Facts } from '../components/fact/facts';
import { SkillSet } from '../components/skills/interfaces/skills';
import { Testimonial } from '../components/testimonials/interfaces/testimonial';
import { PortFolio } from '../components/portfolio/interfaces/portfolio';
import { Service } from '../components/services/interfaces/service';
import { About } from '../components/about/interfaces/about';
import { Contact } from '../components/contact/interfaces/contact';
import { Summary } from '../components/summary/interfaces/summary';

export interface Profile {
  birthday?: string;
  contact?: Contact;
  about: About;
  facts?: Facts;
  skillSet?: SkillSet;
  summary: Summary;
  testimonials: Testimonial[];
  portfolio: PortFolio;
  service: Service;
}
