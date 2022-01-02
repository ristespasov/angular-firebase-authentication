export enum AuthErrorMessageType {
  EmailExists = 'EMAIL_EXISTS',
  OperationNotAlowed = 'OPERATION_NOT_ALLOWED',
  TooManyAttemptsTryLater = 'TOO_MANY_ATTEMPTS_TRY_LATER',
  EmailNotFound = 'EMAIL_NOT_FOUND',
  InvalidPassword = 'INVALID_PASSWORD',
  UserDisabled = 'USER_DISABLED',
  ExpiredOobCode = 'EXPIRED_OOB_CODE',
  InvalidOobCode = 'INVALID_OOB_CODE',
}

export enum AuthSuccessMessageType {
  RegisterSuccess = 'Successfully registered!',
  LoginSuccess = 'Successfully logged in!',
  ResetEmailSentSuccess = 'An email with a reset link was successfully sent to you!',
  ResetPasswordSuccess = 'Your password was successfully reset!',
}
