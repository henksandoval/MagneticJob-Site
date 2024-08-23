import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
