import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthSuccessMessageType } from 'src/app/auth/enums/auth-message.enum';
import { AlertType } from 'src/app/shared/enums/alert.enum';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ILoginPayload } from '../../interfaces/login.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/auth.component.scss'],
})
export class LoginComponent {
  destroy$ = new Subject();
  isHidden: boolean = true;
  isSpinning: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSpinning = true;

    const formValue = this.loginForm.value;

    const loginPayload: ILoginPayload = {
      email: formValue.email,
      password: formValue.password,
      returnSecureToken: true,
    };

    this.authService
      .login(loginPayload)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.isSpinning = false;
          console.log(response);
          this.alertService.openSnackBar(
            AuthSuccessMessageType.LoginSuccess,
            AlertType.Success
          );
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.isSpinning = false;
          this.alertService.openSnackBar(
            err.error.error.message,
            AlertType.Error
          );
        },
        complete: () => {
          console.info('COMPLETE:', 'Completed!');
        },
      });
  }
}
