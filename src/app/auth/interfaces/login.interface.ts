export interface ILoginPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface ILoginResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}
