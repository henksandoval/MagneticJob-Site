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
  private readonly profileService: ProfileService = inject(ProfileService);
  private professionIndex = 0;
  profile$ = this.profileService.profile$;
  professions$ = computed(() => this.profile$()?.personalData.professions || []);
  currentProfession$ = signal<string>('');

  ngOnInit() {
    this.subscription = interval(500).subscribe(() => {
      this.updateCurrentProfession();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateCurrentProfession(): void {
    const professions = this.professions$();

    if (professions && professions.length > 0) {
      this.currentProfession$.set(professions[this.professionIndex]);
      this.professionIndex = (this.professionIndex + 1) % professions.length;
    }
  }
}
