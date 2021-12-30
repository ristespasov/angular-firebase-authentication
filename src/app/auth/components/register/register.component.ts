import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { validationPatterns } from '../../../shared/constants/validation-patterns.constants';
import { IRegisterPayload } from '../../interfaces/register.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/auth.component.scss'],
})
export class RegisterComponent {
  destroy$ = new Subject();
  hide = true;

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(validationPatterns.email),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(validationPatterns.password),
    ]),
  });

  constructor(private authService: AuthService) {}

  onDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.value;

    const registerPayload: IRegisterPayload = {
      email: formValue.email,
      password: formValue.password,
      returnSecureToken: true,
    };

    this.authService
      .register(registerPayload)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('SUCCESS:', response);
        },
        error: (err) => {
          console.error('ERROR:', err.error.error.message);
        },
        complete: () => {
          console.info('COMPLETE:', 'Completed!');
        },
      });
  }
}
