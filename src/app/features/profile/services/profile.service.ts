import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';
import { HttpService } from '@core/services/http/http.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { StateService } from '@core/services/state/state.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly http = inject(HttpService);
  private readonly stateService = inject(StateService);

  profile$ = toSignal(this.loadProfile(this.stateService.userName()));

  private loadProfile(userName: string): Observable<Profile> {
    const url = `stubs/data.${userName || 'john'}.json`;
    return this.http.get<Profile>(url).pipe(
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
