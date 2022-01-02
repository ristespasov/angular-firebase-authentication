export interface IResetPasswordPayload {
  requestType?: string;
  oobCode?: string;
  password?: string;
  email?: string;
}

export interface IResetPasswordResponse {
  requestType?: string;
  email: string;
}
