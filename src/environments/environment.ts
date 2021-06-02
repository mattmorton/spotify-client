import { AuthConfig } from 'angular-oauth2-oidc';
import * as scopes from '../app/core/auth/auth.model';

const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://accounts.spotify.com',
  loginUrl: 'https://accounts.spotify.com/authorize',
  redirectUri: 'http://localhost:4200/home',
  clientId: process.env.SPOTIFY_CLIENT_ID,
  responseType: 'code',
  oidc: false,
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
  scope: scopes.userScopes.join(' '),
  strictDiscoveryDocumentValidation: false,
  showDebugInformation: true,
  revocationEndpoint: 'https://accounts.spotify.com/api/revoke'
}

export const environment = {
  production: false,
  authCodeFlowConfig
};