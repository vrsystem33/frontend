import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MessageService } from "./message.service";
import { tap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AppState } from "../core/reducers";
import { logout } from "../core/actions/auth.action";

@Injectable({
  providedIn: 'root'
})
export class InterceptService {

  private returnUrl: string;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private message: MessageService,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-debugger
    // modify request
    console.log(environment.authTokenKey)
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(environment.authTokenKey)}`
      }
    });

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (event.status == 201) {
              this.message.toastSuccess(event.body.message, '');
            }
          }
        },
        error => {
          console.log(error)
          if (!error || (error && error.status == 0)) this.message.alertNet();

          if (error.status == 401) {
            this.message.toastError('Faça login novamente para continuar', 'Sessão expirada');
            this.store.dispatch(logout())
          } else {

            let message = "";

            if (Array.isArray(error.error.erros)) {
              for (let err of error.error.erros) {
                message += `${err} \n`;
              }
            } else {
              message = error.error.message;
            }

            this.message.toastError(message, 'Falha na requisição');
          }
        }
      )
    );
  }

}