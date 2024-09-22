import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
