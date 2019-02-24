import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authIdToken: string;
  private authAccessToken: string;
  private authExpiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: 'BAxo5A9oASdIHMa5Odm4WzkhRScGXd5w',
    domain: 'dev-8sxhq387.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid'
  });

  constructor(public router: Router) {
    this.authIdToken = '';
    this.authAccessToken = '';
    this.authExpiresAt = 0;
  }

  get accessToken(): string {
    return this.authAccessToken;
  }

  get idToken(): string {
    return this.authIdToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {

    localStorage.setItem('isLoggedIn', 'true');

    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.authAccessToken = authResult.accessToken;
    this.authIdToken = authResult.idToken;
    this.authExpiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    this.authAccessToken = '';
    this.authIdToken = '';
    this.authExpiresAt = 0;

    localStorage.removeItem('isLoggedIn');

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    return new Date().getTime() < this.authExpiresAt;
  }

}
