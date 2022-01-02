export interface IResetPasswordPayload {
  requestType?: string;
  oobCode?: string;
  newPassword?: string;
  email?: string;
}

export interface IResetPasswordResponse {
  requestType?: string;
  email: string;
}
