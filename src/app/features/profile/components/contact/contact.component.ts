import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
