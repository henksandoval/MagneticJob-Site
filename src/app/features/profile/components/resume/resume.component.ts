import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
