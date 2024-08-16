import { Component } from '@angular/core';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CoverComponent,
    ProfileComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
