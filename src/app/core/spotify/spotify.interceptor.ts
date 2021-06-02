import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class SpotifyInterceptor implements HttpInterceptor {

    constructor(private authStorage: OAuthStorage,) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url === 'https://accounts.spotify.com/api/token') {
            return next.handle(req)
        }
        const authToken = this.authStorage.getItem('access_token');
        const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
        return next.handle(authReq);
    }
}