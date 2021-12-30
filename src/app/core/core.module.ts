import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    // angular
    CommonModule,
    HttpClientModule,
  ],
})
export class CoreModule {}
