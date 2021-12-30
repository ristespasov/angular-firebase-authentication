import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
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

  constructor(private authService: AuthService) {}

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
          console.log('SUCCESS:', response);
          this.isSpinning = false;
        },
        error: (err) => {
          console.error('ERROR:', err.error.error.message);
          this.isSpinning = false;
        },
        complete: () => {
          console.info('COMPLETE:', 'Completed!');
        },
      });
  }
}
