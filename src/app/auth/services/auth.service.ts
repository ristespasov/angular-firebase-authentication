import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginPayload, ILoginResponse } from '../interfaces/login.interface';
import {
  IRegisterPayload,
  IRegisterResponse,
} from '../interfaces/register.interface';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient) {}

  register(registerPayload: IRegisterPayload): Observable<IRegisterResponse> {
    return this.http
      .post<IRegisterResponse>(
        environment.baseUrl + environment.registerUrl + environment.API_KEY,
        registerPayload
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  login(loginPayload: ILoginPayload): Observable<ILoginResponse> {
    return this.http
      .post<ILoginResponse>(
        environment.baseUrl + environment.loginUrl + environment.API_KEY,
        loginPayload
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: IUser = JSON.parse(localStorage.getItem('userData')!);

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  logout() {
    this.user.next(null);
    localStorage.clear();
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
