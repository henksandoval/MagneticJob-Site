import { ContactProfile } from '../components/contact/contactProfile';

export interface Summary {
  about: string;
  name: string;
  introduction: string;
  contact: ContactProfile[];
}
