import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    // angular
    CommonModule,
    HttpClientModule,

    // material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class CoreModule {}
