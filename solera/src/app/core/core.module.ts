import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    TarjetaComponent
  ],
  exports: [
    TarjetaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
