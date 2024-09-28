import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Profile } from '../../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileSource = signal<Profile | null>(null);
  private profileLoaded = signal(false);

  profile$ = computed(() => this.profileSource());

  private readonly http = inject(HttpClient);

  constructor() {
    this.loadProfile();
  }

  private loadProfile(): void {
    if (!this.profileLoaded()) {
      this.http
        .get<Profile>('assets/data.json')
        .pipe(
          tap((data: Profile) => {
            this.profileSource.set(data);
            this.profileLoaded.set(true);
          })
        )
        .subscribe();
    }
  }
}
