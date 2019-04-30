import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TarjetaComponent,
    ServicioComponent
  ],
  exports: [
    TarjetaComponent,
    ServicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
