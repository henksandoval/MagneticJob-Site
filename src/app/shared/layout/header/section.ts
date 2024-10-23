export interface Section {
  key: string;
  icon: string;
  label: string;
  isActive: boolean;
}

export const SECTIONS: Section[] = [
  { key: 'hero', icon: 'bx-home', label: 'Home', isActive: true },
  { key: 'about', icon: 'bx-user', label: 'About', isActive: false },
  { key: 'resume', icon: 'bx-file-blank', label: 'Resume', isActive: false },
  { key: 'portfolio', icon: 'bx-book-content', label: 'Portfolio', isActive: false },
  { key: 'skills', icon: 'bx-brain', label: 'Skills', isActive: false },
  { key: 'services', icon: 'bx-server', label: 'Services', isActive: false },
  { key: 'contact', icon: 'bx-envelope', label: 'Contact', isActive: false },
];
