import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DataTablesModule } from 'angular-datatables';
import { TreatmentComponent } from './treatment/treatment.component';
import { TicketComponent } from './ticket/ticket.component';
import { DetalleDiagnosticoComponent } from './detalles-diagnosticos/detalle-diagnostico/detalle-diagnostico.component';
import { DetallediagnosticoamlfalseComponent } from './detalles-diagnosticos/detallediagnosticoamlfalse/detallediagnosticoamlfalse.component';
import { DetallediagnosticoallComponent } from './detalles-diagnosticos/detallediagnosticoall/detallediagnosticoall.component';
import { DetallediagnosticoallfalseComponent } from './detalles-diagnosticos/detallediagnosticoallfalse/detallediagnosticoallfalse.component';
import { DetallediagnosticocllComponent } from './detalles-diagnosticos/detallediagnosticocll/detallediagnosticocll.component';
import { DetallediagnosticocllfalseComponent } from './detalles-diagnosticos/detallediagnosticocllfalse/detallediagnosticocllfalse.component';
import { DetallediagnosticocmlComponent } from './detalles-diagnosticos/detallediagnosticocml/detallediagnosticocml.component';
import { DetallediagnosticocmlfalseComponent } from './detalles-diagnosticos/detallediagnosticocmlfalse/detallediagnosticocmlfalse.component';


@NgModule({
  declarations: [PatientComponent, TreatmentComponent, TicketComponent],
  imports: [
    CommonModule,
    FormsModule,
    PatientRoutingModule,
    ModalModule,
    DataTablesModule,
    BsDropdownModule.forRoot()
  ]
})
export class PatientModule { }
