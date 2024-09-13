import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
