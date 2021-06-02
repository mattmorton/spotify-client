import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.setLoading(true, req.url)
    return next.handle(req).pipe(
      catchError((e) => {
        this.loaderService.setLoading(false, req.url)
        return throwError(e)
      })
    ).pipe(
      map((res) => {
        if (res instanceof HttpResponse) {
          this.loaderService.setLoading(false, req.url)
        }
        return res;
      })
    )
  }
}
