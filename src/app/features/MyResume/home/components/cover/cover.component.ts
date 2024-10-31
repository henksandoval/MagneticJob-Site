import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  private typeSubscription: Subscription | undefined;
  private readonly profileService: ProfileService = inject(ProfileService);
  private professionIndex = 0;
  private charIndex = 0;
  profile$ = this.profileService.profile$;
  professions$ = computed(() => this.profile$()?.personalData?.professions || []);
  currentProfession$ = signal<string>('');

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.startTyping();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.typeSubscription?.unsubscribe();
  }

  private startTyping(): void {
    const professions = this.professions$();
    if (professions && professions.length > 0) {
      const profession = professions[this.professionIndex];
      this.typeSubscription?.unsubscribe();
      this.typeSubscription = interval(250).subscribe((): void => {
        if (this.charIndex < profession.length) {
          this.currentProfession$.set(profession.substring(0, this.charIndex + 1));
          this.charIndex++;
        } else {
          this.typeSubscription?.unsubscribe();
          this.charIndex = 0;
          this.professionIndex = (this.professionIndex + 1) % professions.length;
        }
      });
    }
  }
}
