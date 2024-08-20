import { ContactProfile } from "./contactProfile";

export interface Summary {
  about: string;
  name: string;
  summary: string;
  contact: ContactProfile[];
}
