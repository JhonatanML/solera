import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Servicio } from 'src/app/clases/servicio';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicio: Servicio = new Servicio();
  @Output() grabar: EventEmitter<Servicio> = new EventEmitter();
  @Input() disabled: boolean;
  @Input() tipo: number;

  tipos: any = [
    { id: 1, descripcion: 'Auto', tipo: 1},
    { id: 2, descripcion: 'Salud', tipo: 2},
    { id: 3, descripcion: 'Hogar', tipo: 3},
  ]
  constructor() { }

  ngOnInit() {
    if(this.tipo > 0){
      this.servicio.tipo = this.tipo;
    }
  }

  submitGrabar(forma: NgForm){
    if(forma.invalid){
      return;
    }
    
    this.grabar.emit(this.servicio);
    this.servicio = new Servicio();
  }

  cancelar(){
    this.servicio = new Servicio();
  }
}
