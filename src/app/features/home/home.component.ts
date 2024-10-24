import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { CoverComponent } from '../../shared/layout/cover/cover.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ProfileComponent } from '../profile/profile.component';
import { MENU_SECTIONS } from 'src/app/shared/layout/header/constants';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '@core/services/state/state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CoverComponent, FooterComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  activedRoute = inject(ActivatedRoute);
  stateService = inject(StateService);
  sections = signal(MENU_SECTIONS);

  constructor() {
    this.activedRoute.paramMap.subscribe((params) => {
      const userName = params.get('username')!;
      this.stateService.userName.set(userName);
    });
  }
}
