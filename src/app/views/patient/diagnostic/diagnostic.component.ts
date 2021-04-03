import { Component, OnInit } from '@angular/core';
//***import { General, Sign, Symptom, LabResult, Sigla } from '../../../models/todo';

import { Aml } from '../../../models/aml';
import { Cll } from '../../../models/cll';
import { Cml } from '../../../models/cml';
import { All } from '../../../models/all';



import { MedicalService } from '../../../services/medical.service';
import { LabResult } from '../../../models/labResult';
import { Symptom } from '../../../models/symptom';
import { Sign } from '../../../models/sign';
import { General } from '../../../models/general';
//!import { HttpClientModule, HttpClient } from '@angular/common/http'; 


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
  //**sigla:Sigla=new Sigla(this.general,this.sign,this.symptom,this.labResult);


  
  all: All= new All();
  cll: Cll= new Cll();
  aml: Aml= new Aml();
  cml: Cml= new Cml();
  


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
    //this.sigla=new Sigla(this.general,this.sign,this.symptom,this.labResult);
    //this.general=new General;
    //this.sign=new Sign;
    //this.symptom=new Symptom;
    //this.labResult=new LabResult;
    this.all=new All();
    this.cll=new Cll();
    this.aml=new Aml();
    this.cml=new Cml();
  }

  onSendCards(){
    //console.log( this.sigla);
    console.log(this.all);
    console.log(this.cll);
    console.log(this.aml);
    console.log(this.cml);
  }


  
  /*
  constructor(private http: HttpClient){}

  onSendCards(data){
   
   this.http.post('http://......:###/diagnostic',data)
   .subscribe((result)=>{
     console.warn("result",result)
   })
  }
  */
  



}
