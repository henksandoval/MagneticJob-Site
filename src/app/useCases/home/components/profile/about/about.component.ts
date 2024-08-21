import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private profileService: ProfileService = inject(ProfileService);

  profile$ = this.profileService.profile$;
}
