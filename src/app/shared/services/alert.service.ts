import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertType } from '../enums/alert.enum';

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
}
