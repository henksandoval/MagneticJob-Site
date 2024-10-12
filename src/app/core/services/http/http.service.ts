import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<TOut>(url: string, params?: HttpParams): Observable<any> {
    return this.http.get<TOut>(url, { params });
  }

  post<TIn, TOut>(url: string, body: TIn, options?: { headers?: HttpHeaders }): Observable<TOut> {
    return this.http.post<TOut>(url, body, options);
  }

  put<TIn, TOut>(url: string, body: TIn, options?: { headers?: HttpHeaders }): Observable<TOut> {
    return this.http.put<TOut>(url, body, options);
  }

  patch<TIn, TOut>(url: string, body: TIn, options?: { headers?: HttpHeaders }): Observable<TOut> {
    return this.http.patch<TOut>(url, body, options);
  }

  delete<TOut>(url: string, options?: { headers?: HttpHeaders }): Observable<TOut> {
    return this.http.delete<TOut>(url, options);
  }
}
