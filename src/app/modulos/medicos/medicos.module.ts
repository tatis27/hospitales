import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosDashboardComponent } from './componentes/medicos-dashboard/medicos-dashboard.component';


@NgModule({
  declarations: [MedicosDashboardComponent],
  imports: [
    CommonModule,
    MedicosRoutingModule
  ]
})
export class MedicosModule { }
