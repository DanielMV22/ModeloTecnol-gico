import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DataTablesModule } from 'angular-datatables';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { TreatmentComponent } from './treatment/treatment.component';

@NgModule({
  declarations: [PatientComponent, DiagnosticComponent, TreatmentComponent],
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
