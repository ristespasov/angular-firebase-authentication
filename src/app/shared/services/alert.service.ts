import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertType } from '../enums/alert.enum';
import { AuthErrorMessageType } from '../enums/auth-message.enum';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}
  public openSnackBar(message: string, snackType?: AlertType) {
    const alertType: AlertType =
      snackType !== undefined ? snackType : AlertType.Error;

    this.snackBar.openFromComponent(AlertComponent, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: { message: message, snackType: alertType },
    });
  }

  handleAuthErrorMessage(value: any) {
    switch (value) {
      case AuthErrorMessageType.EmailExists:
        return (value =
          'The email address is already in use by another account.');
      case AuthErrorMessageType.OperationNotAlowed:
        return (value = 'Password sign-in is disabled for this project.');
      case AuthErrorMessageType.TooManyAttemptsTryLater:
        return (value =
          'We have blocked all requests from this device due to unusual activity. Try again later.');
      case AuthErrorMessageType.EmailNotFound:
        return (value =
          'There is no user record corresponding to this identifier. The user may have been deleted.');
      case AuthErrorMessageType.InvalidPassword:
        return (value = 'The password you entered is incorrect.');
      case AuthErrorMessageType.UserDisabled:
        return (value =
          'The user account has been disabled by an administrator.');
    }
    return value;
  }
}
