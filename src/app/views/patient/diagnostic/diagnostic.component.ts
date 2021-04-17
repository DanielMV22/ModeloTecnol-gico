import { Component, Input, OnInit } from '@angular/core';
import { All} from '../../../models/all';
import { Cll } from '../../../models/cll';
import { Aml } from '../../../models/aml';
import { Cml} from '../../../models/cml';
import { MedicalService } from '../../../services/medical.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit{

 isPatient = true;
  patient;
  patientList=[];
  
  required=false;


  localPatient:any;

  isExpanded: boolean;
  isExpandedA: boolean;
  isExpandedB: boolean;
  isExpandedC: boolean;

//! AML
  show=false;
  showAml=true;
  showfalse=true;
  
//!ALL

  showA=false;
  showAll=true;
  showAfalse=true;

  //!CLL

  showB=false;
  showCll=true;
  showBfalse=true;

   //!CML

   showC=false;
   showCml=true;
   showCfalse=true;
 



  toggle()  { this.isExpanded = !this.isExpanded;   }
  toggleA() { this.isExpandedA = !this.isExpandedA; }
  toggleB() { this.isExpandedB = !this.isExpandedB; }
  toggleC() { this.isExpandedC = !this.isExpandedC; }

  disease;
  diseaseList=[
    {id:0,name:'Leucemia Linfoblástica Aguda - (ALL)'},
    {id:1,name:'Leucemia Linfocítica Crónica  - (CLL)'},
    {id:2,name:'Leucemia Mieloide Aguda  - (AML)'},
    {id:3,name:'Leucemia Mieloide Crónica - (CML)'}
  ];
  
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

  limpiar(){
    if(this.showfalse==true){
      this.showfalse=false;
    }else{
    this.showfalse=true;
    }
    if(this.showAfalse==true){
      this.showAfalse=false;
    }else{
    this.showAfalse=true;
    }
    if(this.showBfalse==true){
      this.showBfalse=false;
    }else{
    this.showBfalse=true;
    }
    if(this.showCfalse==true){
      this.showCfalse=false;
    }else{
    this.showCfalse=true;
    }
   
  }
  

  onBack(){
    this.isPatient=true;
    this.show=false;
    this.showA=false;
    this.showB=false;
    this.showC=false;
    this.all=new All();
    this.cll=new Cll();
    this.aml=new Aml();
    this.cml=new Cml();
  }

  onSendCardsAll(){
    this.medicalService.addAll(this.all).subscribe((response: All)=> console.log(response));
    //console.log(this.all);

    this.showA=true;
    this.showAll=false;
  }
  
  onSendCardsCll(){
    this.medicalService.addCll(this.cll).subscribe((response: Cll )=> console.log(response));

    this.showB=true;
    this.showCll=false;
   // console.log(this.cll);
  }
  onSendCardsAml(){
    this.medicalService.addAml(this.aml).subscribe((response: Aml)=> console.log(response));
    this.show=true;
    this.showAml=false;

    console.log(this.aml.sign.AppearanceOfRedDotOnTheSkin);
  }
  onSendCardsCml(){
    this.medicalService.addCml(this.cml).subscribe((response: Cml)=> console.log(response));

    this.showC=true;
    this.showCml=false;

  }




}




