import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';
import { HttpService } from '@core/services/http/http.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly http = inject(HttpService);

  profile$ = toSignal(this.loadProfile());

  private loadProfile(): Observable<Profile> {
    return this.http.get<Profile>('stubs/data.jane.json').pipe(
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
