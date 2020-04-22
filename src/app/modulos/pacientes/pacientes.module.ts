import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesDashboardComponent } from './componentes/pacientes-dashboard/pacientes-dashboard.component';


@NgModule({
  declarations: [PacientesDashboardComponent],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
