import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResult } from './pages/dashboard/interface/apiResult';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private router: Router) {

  }

  apiUrl = environment.dummyApiUrl;

  httpOptions: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'app-id': '611f33c594916dee4af13a68'
  });

  get<T>(scope: string): Observable<ApiResult<T>> {
    return this.http.get<ApiResult<T>>(`${this.apiUrl}${scope}`, {
      headers: this.httpOptions
    })
    // we can also use map the value only return data property
    .pipe(
      catchError(this.handleError)
      );
  }

  private handleError(error: Response): Observable<never> {

    if (error.status === 401) {
      this.router.navigate(['/auth/login']);
      return throwError(new Error('Unauthorized'));
    }
    return throwError(new Error('An unknown error occured'));
  }

}
