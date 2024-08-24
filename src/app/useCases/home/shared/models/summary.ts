import { ContactProfile } from './contactProfile';

export interface Summary {
  about: string;
  name: string;
  introduction: string;
  contact: ContactProfile[];
}
