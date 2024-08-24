import { Component, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor],
  templateUrl: './resume.component.html',
  styles: ``,
})
export class ResumeComponent implements OnInit {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;

  ngOnInit(): void {
    this.profileService.loadProfile();
  }
}
