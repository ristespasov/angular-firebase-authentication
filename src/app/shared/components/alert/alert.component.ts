import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { AlertType } from '../../enums/alert.enum';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'smart-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<AlertComponent>,
    public alertService: AlertService
  ) {}

  ngOnInit() {
    this.data.message = this.alertService.handleAuthErrorMessage(
      this.data.message
    );
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
}
