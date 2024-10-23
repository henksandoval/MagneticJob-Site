import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { CoverComponent } from '../../shared/layout/cover/cover.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ProfileComponent } from '../profile/profile.component';
import { MENU_SECTIONS } from 'src/app/shared/layout/header/section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CoverComponent, FooterComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  sections = signal(MENU_SECTIONS);
}
