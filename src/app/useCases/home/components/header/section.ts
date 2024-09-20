export interface Section {
  target: string;
  icon: string;
  label: string;
}

export const SECTIONS: Section[] = [
  { target: 'hero', icon: 'bx-home', label: 'labels.home' },
  { target: 'about', icon: 'bx-user', label: 'labels.about' },
  { target: 'resume', icon: 'bx-file-blank', label: 'labels.resume' },
  { target: 'portfolio', icon: 'bx-book-content', label: 'labels.portfolio' },
  { target: 'services', icon: 'bx-server', label: 'labels.services' },
  { target: 'contact', icon: 'bx-envelope', label: 'labels.contact' },
];
