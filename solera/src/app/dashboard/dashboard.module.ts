import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

//Componentes
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { AutosComponent } from '../autos/autos.component';
import { SaludComponent } from '../salud/salud.component';
import { HogarComponent } from '../hogar/hogar.component';
import { TodosComponent } from '../todos/todos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AutosComponent,
    SaludComponent,
    HogarComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class DashboardModule { }
