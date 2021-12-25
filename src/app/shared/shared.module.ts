import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LocaleComponent } from './components/locale/locale.component';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    LocaleComponent,
  ],
  imports: [
    CommonModule,
    // material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    // components
    HeaderComponent,
    FooterComponent,
    LocaleComponent,

    // material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
