import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from '../todos/todos.component';
import { AutosComponent } from '../autos/autos.component';
import { HogarComponent } from '../hogar/hogar.component';
import { SaludComponent } from '../salud/salud.component';
import { DashboardComponent } from './dashboard.component';

const childrenRoutes: Routes = [
  {
    path: 'todos', component: TodosComponent
  },
  {
    path: 'autos', component: AutosComponent
  },
  {
    path: 'hogar', component: HogarComponent
  },
  {
    path: 'salud', component: SaludComponent 
  },
  {
    path: '', component: TodosComponent
  }
];

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: childrenRoutes
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
