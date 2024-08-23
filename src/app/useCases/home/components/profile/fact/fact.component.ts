import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './fact.component.html',
  styles: ``,
})
export class FactComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
