export interface IRegisterPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface IRegisterResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
