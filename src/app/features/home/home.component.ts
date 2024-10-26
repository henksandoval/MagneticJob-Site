import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../shared/layouts/header/header.component';
import { CoverComponent } from '../../shared/layouts/cover/cover.component';
import { FooterComponent } from '../../shared/layouts/footer/footer.component';
import { ProfileComponent } from '../profile/profile.component';
import { MENU_SECTIONS } from 'src/app/shared/layouts/header/constants';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '@core/services/state/state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CoverComponent, FooterComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../assets/vendor/aos/aos.css',
    '../../../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/vendor/bootstrap-icons/bootstrap-icons.min.css',
    '../../../assets/vendor/boxicons/css/boxicons.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  activatedRoute = inject(ActivatedRoute);
  stateService = inject(StateService);
  sections = signal(MENU_SECTIONS);

  constructor() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const userName = params.get('username')!;
      this.stateService.userName.set(userName);
    });

    this.loadScript('vendor/aos/aos.js');
    this.loadScript('vendor/bootstrap/js/bootstrap.bundle.min.js');
    this.loadScript('vendor/isotope-layout/isotope.pkgd.min.js');
    this.loadScript('vendor/typed.js/typed.umd.js');
    this.loadScript('js/main.js');
  }

  private loadScript(src: string): void {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
}
