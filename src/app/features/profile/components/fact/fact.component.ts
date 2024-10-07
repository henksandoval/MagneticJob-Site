import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './fact.component.html',
  styleUrl: 'fact.component.scss',
})
export class FactComponent {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
}
