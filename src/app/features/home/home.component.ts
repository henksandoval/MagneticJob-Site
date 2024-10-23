import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { CoverComponent } from '../../shared/layout/cover/cover.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ProfileComponent } from '../profile/profile.component';
import { JsonPipe } from '@angular/common';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type menuSection = {
  key: string;
  icon: string;
  label: string;
  isActive: boolean;
};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CoverComponent, FooterComponent, ProfileComponent, JsonPipe],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  private _menuSections = {
    hero: { target: 'hero', icon: 'bx-home', label: 'Home', isActive: true },
    about: { target: 'about', icon: 'bx-user', label: 'About', isActive: false },
    resume: { target: 'resume', icon: 'bx-file-blank', label: 'Resume', isActive: false },
    portfolio: { target: 'portfolio', icon: 'bx-book-content', label: 'Portfolio', isActive: false },
    skills: { target: 'skills', icon: 'bx-brain', label: 'Skills', isActive: false },
    facts: { target: 'facts', icon: 'bx-user', label: 'Facts', isActive: false },
    services: { target: 'services', icon: 'bx-server', label: 'Services', isActive: false },
    testimonials: { target: 'testimonials', icon: 'bx-server', label: 'Testimonials', isActive: false },
    contact: { target: 'contact', icon: 'bx-envelope', label: 'Contact', isActive: false },
  };

  sections = signal(this._menuSections);
}
