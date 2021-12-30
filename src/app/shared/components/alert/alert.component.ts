import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { AlertType } from '../../enums/alert.enum';
import { AuthErrorMessageType } from '../../enums/auth-message.enum';

@Component({
  selector: 'smart-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<AlertComponent>
  ) {
    console.log(data);
  }

  ngOnInit() {
    this.generateErrorMessage();
  }

  get getClass(): any {
    switch (this.data.snackType) {
      case AlertType.Success:
        return 'success';
      case AlertType.Error:
        return 'error';
      case AlertType.Info:
        return 'info';
      case AlertType.Warning:
        return 'warning';
    }
  }

  get getIcon(): any {
    switch (this.data.snackType) {
      case AlertType.Success:
        return '../../../../assets/icons/success.png';
      case AlertType.Error:
        return '../../../assets/icons/error.png';
      case AlertType.Info:
        return '../../../../assets/icons/info.png';
      case AlertType.Warning:
        return '../../../../assets/icons/warning.png';
    }
  }

  generateErrorMessage(): any {
    switch (this.data.message) {
      case AuthErrorMessageType.EmailExists:
        return (this.data.message =
          'The email address is already in use by another account.');
      case AuthErrorMessageType.OperationNotAlowed:
        return (this.data.message =
          'Password sign-in is disabled for this project.');
      case AuthErrorMessageType.TooManyAttemptsTryLater:
        return (this.data.message =
          'We have blocked all requests from this device due to unusual activity. Try again later.');
      case AuthErrorMessageType.EmailNotFound:
        return (this.data.message =
          'There is no user record corresponding to this identifier. The user may have been deleted.');
      case AuthErrorMessageType.InvalidPassword:
        return (this.data.message = 'The password you entered is incorrect.');
      case AuthErrorMessageType.UserDisabled:
        return (this.data.message =
          'The user account has been disabled by an administrator.');
    }
  }
}
