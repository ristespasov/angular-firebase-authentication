import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeGuard } from './guards/home.guard';
import { RedirectGuard } from './guards/redirect.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [HomeGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [HomeGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [HomeGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [HomeGuard],
  },
  {
    path: '__/auth/action',
    component: ResetPasswordComponent,
    canActivate: [RedirectGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
