export enum AuthErrorMessageType {
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED',
  TOO_MANY_ATTEMPTS_TRY_LATER = 'TOO_MANY_ATTEMPTS_TRY_LATER',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  USER_DISABLED = 'USER_DISABLED',
  EXPIRED_OOB_CODE = 'EXPIRED_OOB_CODE',
  INVALID_OOB_CODE = 'INVALID_OOB_CODE',
}

export enum AuthSuccessMessageType {
  REGISTER_SUCCESS = 'Successfully registered!',
  LOGIN_SUCCESS = 'Successfully logged in!',
  RESET_EMAIL_SENT_SUCCESS = 'An email with a reset link was successfully sent to you!',
  RESET_PASSWORD_SUCCESS = 'Your password was successfully reset!',
}
