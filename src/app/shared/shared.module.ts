import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatSnackBarModule,
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LocaleComponent } from './components/locale/locale.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    LocaleComponent,
    AlertComponent,
  ],
  providers: [
    {
      provide: MatSnackBarRef,
      useValue: {},
    },
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {},
    },
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    // material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  exports: [
    // components
    HeaderComponent,
    FooterComponent,
    LocaleComponent,
    AlertComponent,

    // material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
