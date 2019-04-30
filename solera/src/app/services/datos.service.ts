import { Injectable } from "@angular/core";
import { Servicio } from "../clases/servicio";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DatosService {
  datos: Servicio[] = [];

  datos$: BehaviorSubject<Servicio[]> = new BehaviorSubject([]);

  constructor() {
    this.cargaInicial();
  }

  cargaInicial() {
    //tipos 1: auto, 2: salud, 3: hogar
    const descripcion =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    let elemento: Servicio = {
      id: 1,
      titulo: "Electricidad",
      descripcion,
      tipo: 3
    };
    this.datos.push(elemento);

    elemento = {
      id: 2,
      titulo: "Auxilio Mecanico",
      descripcion,
      tipo: 1
    };
    this.datos.push(elemento);

    elemento = {
      id: 3,
      titulo: "Chofer reemplazo",
      descripcion,
      tipo: 1
    };
    this.datos.push(elemento);

    elemento = {
      id: 4,
      titulo: "Medico a domicilio",
      descripcion,
      tipo: 2
    };
    this.datos.push(elemento);

    elemento = {
      id: 5,
      titulo: "Ambulancia",
      descripcion,
      tipo: 2
    };
    this.datos.push(elemento);

    elemento = {
      id: 6,
      titulo: "Gasfitero",
      descripcion,
      tipo: 3
    };
    this.datos.push(elemento);
    this.datos$.next(this.datos);
  }

  registrar(servicio: Servicio) {
    if (this.validarRegistro(servicio.id)) {
      let elemento = this.datos.find(item => item.id === servicio.id);
      let index = this.datos.indexOf(elemento);
      this.datos[index] = servicio;
    } else {
      servicio.id = this.recuperarUltimoId();
      this.datos.push(servicio);
      this.datos$.next(this.datos);
    }

    console.log(this.datos);
    
  }

  validarRegistro(id: number) {
    return this.datos.some(servicio => servicio.id === id);
  }

  eliminarRegistro(id: number) {
    if (this.validarRegistro(id)) {
      let elemento = this.datos.find(item => item.id === id);
      let index = this.datos.indexOf(elemento);
      this.datos.splice(index, 1);
      this.datos$.next(this.datos);
    } else {
      console.log("Registro no encontrado");
      alert("Registro no encontrado");
    }
  }

  recuperarDatos() {
    return this.datos$.asObservable();
  }

  recuperarUltimoId() {
    return this.datos[this.datos.length - 1].id + 1;
  }
}
