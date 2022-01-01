import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  request: any;
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }
    if (!request.headers.has('app-id')) {
      request = request.clone({ headers: request.headers.set('app-id', '611f33c594916dee4af13a68') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    this.request = request;

    return next.handle(request).pipe(
      map((event: any) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            this.router.navigate(['/auth/login']);
          }
        }
        return event;
      }), catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/auth/logout']);
        }
        return throwError(err);
      }),
    );
  }
}

