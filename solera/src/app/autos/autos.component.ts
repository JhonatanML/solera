import { Component, OnInit, ViewChild } from "@angular/core";
import { ServicioComponent } from "../core/servicio/servicio.component";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Servicio } from "../clases/servicio";
import { DatosService } from "../services/datos.service";

@Component({
  selector: "app-autos",
  templateUrl: "./autos.component.html",
  styleUrls: ["./autos.component.css"]
})
export class AutosComponent implements OnInit {
  tipo = 1;
  @ViewChild(ServicioComponent) servicioComponent: ServicioComponent;

  data: any = {
    id: 1,
    titulo: "Hola",
    descripcion: "Mundo"
  };

  //Observables
  $datos: Observable<Servicio[]>;
  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.$datos = this.datosService.recuperarDatos().pipe(
      map((servicios: Servicio[]) => {
        return servicios.filter((servicio: Servicio) => servicio.tipo === 1);
      })
    );
  }

  grabar(servicio: Servicio) {
    this.datosService.registrar(servicio);
  }

  editar(servicio: Servicio) {
    this.servicioComponent.servicio = servicio;
  }

  eliminar(id: number) {
    this.datosService.eliminarRegistro(id);
  }

  trackByFn(i: number) {
    return i;
  }
}
