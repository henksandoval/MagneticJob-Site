import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileSource = new BehaviorSubject<Profile | null>(null);
  profile$: Observable<Profile | null> = this.profileSource.asObservable();
  profileLoaded: boolean = false;

  constructor(private http: HttpClient) {
    this.loadProfile();
  }

  private loadProfile(): void {
    this.http.get<Profile>('assets/data.json')
    .subscribe(data => {
      this.profileSource.next(data);
    });
  }
}