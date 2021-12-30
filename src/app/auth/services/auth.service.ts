import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginPayload, ILoginResponse } from '../interfaces/login.interface';
import {
  IRegisterPayload,
  IRegisterResponse,
} from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerPayload: IRegisterPayload): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(
      environment.baseUrl + environment.registerUrl + environment.API_KEY,
      registerPayload
    );
  }

  login(loginPayload: ILoginPayload): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      environment.baseUrl + environment.loginUrl + environment.API_KEY,
      loginPayload
    );
  }

  // logout() {
  //   return from(this.auth.signOut());
  // }
}
