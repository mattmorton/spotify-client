import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
    this.bootstrapAuth();
    this.oauthService.events
    .subscribe(_ => {
      console.log('_', _)
    });
  }

  bootstrapAuth() {
    this.oauthService.configure(environment.authCodeFlowConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.tryLoginCodeFlow();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  refreshToken() {
    this.oauthService.refreshToken();
  }

  getScopes() {
    return this.oauthService.scope;
  }

  getAuthToken() {
    return this.oauthService.getAccessToken()
  }

}
