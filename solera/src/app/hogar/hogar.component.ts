import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioComponent } from '../core/servicio/servicio.component';
import { Observable } from 'rxjs';
import { Servicio } from '../clases/servicio';
import { DatosService } from '../services/datos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit {

  tipo = 3;
  @ViewChild(ServicioComponent) servicioComponent: ServicioComponent;

  data: any = {
    id: 1,
    titulo: 'Hola',
    descripcion: 'Mundo'
  }

  //Observables
  $datos: Observable<Servicio[]>;
  constructor(
    private datosService: DatosService
  ) { }

  ngOnInit() {
    this.$datos = this.datosService.recuperarDatos().pipe(
      map((servicios: Servicio[]) => {
        return servicios.filter((servicio: Servicio) => servicio.tipo === 3);
      })
    );
  }

  grabar(servicio: Servicio){
    this.datosService.registrar(servicio);
  }

  editar(servicio: Servicio){
    this.servicioComponent.servicio = servicio;
  }

  eliminar(id: number){
    this.datosService.eliminarRegistro(id);
  }
}
