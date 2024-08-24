import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileSource = new BehaviorSubject<Profile | null>(null);
  private profileLoaded: boolean = false;
  profile$: Observable<Profile | null> = this.profileSource.asObservable();

  constructor(private http: HttpClient) {}

  public loadProfile(): void {
    if (!this.profileLoaded) {
      this.http.get<Profile>('assets/data.json').subscribe((data) => {
        this.profileSource.next(data);
      });
      this.profileLoaded = true;
    }
  }
}
