import { Component, OnInit } from '@angular/core';
import { General,Sign,Symptom,LabResult } from '../../../models/all';
import { MedicalService } from '../../../services/medical.service';

@Component({
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {

  isPatient = true;
  patient;
  patientList=[];
  localPatient:any;
  required=false;
  isExpanded: boolean;
  isExpandedA: boolean;
  isExpandedB: boolean;
  isExpandedC: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  toggleA() {
    this.isExpandedA = !this.isExpandedA;
  }
  toggleB() {
    this.isExpandedB = !this.isExpandedB;
  }
  toggleC() {
    this.isExpandedC = !this.isExpandedC;
  }


  disease;
  diseaseList=[
    {id:0,name:'Leucemia Linfoblástica Aguda - (ALL)'},
    {id:1,name:'Leucemia Linfocítica Crónica  - (CLL)'},
    {id:2,name:'Leucemia Mieloide Aguda  - (AML)'},
    {id:3,name:'Leucemia Mieloide Crónica - (CML)'}

  ];

  /*CARDS*/
  general : General = new General;
  sign : Sign = new Sign;
  symptom : Symptom = new Symptom;
  labResult : LabResult = new LabResult;

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
    this.isPatient=false;
    this.required=false;
    console.log(this.patient);
  }

  onBack(){
    this.isPatient=true;
    this.general=new General;
    this.sign=new Sign;
    this.symptom=new Symptom;
    this.labResult=new LabResult;
  }

  onSendCards(){
    console.log(this.general);
    console.log(this.sign);
    console.log(this.symptom);
    console.log(this.labResult);
  }

}
