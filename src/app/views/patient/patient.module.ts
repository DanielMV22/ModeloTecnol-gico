import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PatientModule { }
