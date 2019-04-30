import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Servicio } from 'src/app/clases/servicio';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() servicio: Servicio;
  @Output() editar: EventEmitter<Servicio> = new EventEmitter();
  @Output() eliminar: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editarServicio(servicio: Servicio){
    this.editar.emit(servicio);
  }

  eliminarServicio(id: number){
    this.eliminar.emit(id);
  }
}
