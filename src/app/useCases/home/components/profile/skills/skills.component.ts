import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
