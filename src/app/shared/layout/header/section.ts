export interface Section {
  target: string;
  icon: string;
  label: string;
}

export const SECTIONS: Section[] = [
  { target: 'hero', icon: 'bx-home', label: 'Home' },
  { target: 'about', icon: 'bx-user', label: 'About' },
  { target: 'resume', icon: 'bx-file-blank', label: 'Resume' },
  { target: 'portfolio', icon: 'bx-book-content', label: 'Portfolio' },
  { target: 'skills', icon: 'bx-brain', label: 'Skills' },
  { target: 'services', icon: 'bx-server', label: 'Services' },
  { target: 'contact', icon: 'bx-envelope', label: 'Contact' },
];
