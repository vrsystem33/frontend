import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { tap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AppState } from "../core/reducers";
import { logout } from "../core/actions/auth.action";
import { MessageService } from '@app/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  private returnUrl: string = null;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private message: MessageService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(environment.authTokenKey)}`
      }
    });

    return next.handle(request).pipe(
      tap(
        {
          next: event => {
            if (event instanceof HttpResponse) {
              console.log(event)
              if (event.status == 201) {
                this.message.toastSuccess(event.body.message, '');
              }
            }
          }
        }
      )
    );
  }
}