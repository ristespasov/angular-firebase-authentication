import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginPayload, ILoginResponse } from '../interfaces/login.interface';
import {
  IRegisterPayload,
  IRegisterResponse,
} from '../interfaces/register.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

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

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  logout() {
    this.user.next(null);
  }
}
