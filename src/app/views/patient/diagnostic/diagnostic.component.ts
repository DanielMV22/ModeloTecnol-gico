import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../../services/medical.service';

@Component({
  templateUrl: './diagnostic.component.html'
})
export class DiagnosticComponent implements OnInit {

  isPatient = true;
  patient;
  patientList=[];
  localPatient:any;
  patientid;
  required=false;

  constructor(private medicalService: MedicalService) {
    this.localPatient = medicalService.readLocal("patient");
  }

  ngOnInit() {
    if (this.localPatient != null) {
      let arr = this.medicalService.readLocal("patient");
      (arr as any).forEach(e => {
        this.patientList.push(e);
      });
    } else {
      this.medicalService.getPatients().subscribe(
        resp => {
          (resp as any).data.forEach(e => {
            this.patientList.push(e);
          });
        }, err => console.log(err));
    }
  }

  onCards(){
    if(!this.patient) {
      this.required=true;
      return;
    }
    // if(!this.patientid) {
    //   this.required=true;
    //   return;
    // }
    this.isPatient=false;
    this.required=false;
    console.log(this.patient);
  }

  onBack(){
    this.isPatient=true;
  }

}
