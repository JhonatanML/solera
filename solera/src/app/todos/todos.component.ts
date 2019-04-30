import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { Servicio } from '../clases/servicio';
import { Observable } from 'rxjs';
import { ServicioComponent } from '../core/servicio/servicio.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

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
    this.$datos = this.datosService.recuperarDatos();
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
