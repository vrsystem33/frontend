import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient, HttpEventType } from '@angular/common/http';
import { HTTPStatus } from './httpstatus';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// import { EstoqueService } from '@app/services/estoque.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProgressInterceptor implements HttpInterceptor {
  constructor(private status: HTTPStatus) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.reportProgress) {
      // only intercept when the request is configured to report its progress
      return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          switch (event.type) {
            
            case HttpEventType.UploadProgress:
              let progress = Math.round(event.loaded / event.total * 100);
              this.status.setProgressBarUpload(true);
              break;
            case HttpEventType.DownloadProgress:
              this.status.setProgressBar(true);
              break;
            case HttpEventType.Response:
              this.status.setProgressBar(false);
              this.status.setProgressBarUpload(false);
          }
          // if (event.type === HttpEventType.DownloadProgress) {
          //   this.status.setProgressBar(true);
          // } else if (event.type === HttpEventType.Response) {
          //   this.status.setProgressBar(false);
          // }
        }, error => {
          this.status.setProgressBar(false);
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
