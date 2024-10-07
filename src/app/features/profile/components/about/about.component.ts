import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
