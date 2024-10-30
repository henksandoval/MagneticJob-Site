import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements OnInit, OnDestroy {
  private readonly profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;
  professions: string[] = ['Designer', 'Developer', 'Freelancer', 'Photographer'];
  currentProfessionIndex = 0;
  currentProfession = '';
  intervalId = 0;

  ngOnInit() {
    this.typeProfession();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  typeProfession() {
    let charIndex = 0;
    const type = () => {
      if (charIndex < this.professions[this.currentProfessionIndex].length) {
        this.currentProfession += this.professions[this.currentProfessionIndex][charIndex];
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          this.currentProfession = '';
          this.currentProfessionIndex = (this.currentProfessionIndex + 1) % this.professions.length;
          charIndex = 0;
          setTimeout(type, 500);
        }, 1000);
      }
    };
    type();
  }
}
