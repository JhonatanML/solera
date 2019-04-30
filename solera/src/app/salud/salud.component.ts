import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioComponent } from '../core/servicio/servicio.component';
import { Observable } from 'rxjs';
import { Servicio } from '../clases/servicio';
import { DatosService } from '../services/datos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {

  tipo = 2;
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
        return servicios.filter((servicio: Servicio) => servicio.tipo === 2);
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
