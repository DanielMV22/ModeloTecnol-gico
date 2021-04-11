import { Component, OnInit } from '@angular/core';
import { All} from '../../../models/all';
import { Cll } from '../../../models/cll';
import { Aml } from '../../../models/aml';
import { Cml} from '../../../models/cml';
import { MedicalService } from '../../../services/medical.service';
import { Persona } from '../../../models/Persona';

@Component({
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit{

  isPatient = true;
  patient;
  patientList=[];
  localPatient:any;
  required=false;
  isExpanded: boolean;
  isExpandedA: boolean;
  isExpandedB: boolean;
  isExpandedC: boolean;

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
  persona: Persona= new Persona();

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
    this.all=new All();
    this.cll=new Cll();
    this.aml=new Aml();
    this.cml=new Cml();
    this.persona=new Persona();
  }

  onSendCardsAll(){
      this.medicalService.addAll(this.all).subscribe((response: All)=> console.log(response));
    //console.log(this.all);
  }
  
  onSendCardsCll(){
    this.medicalService.addCll(this.cll).subscribe((response: Cll )=> console.log(response));
   // console.log(this.cll);
  }
  onSendCardsAml(){
    this.medicalService.addAml(this.aml).subscribe((response: Aml)=> console.log(response));
    //console.log(this.aml);
  }
  onSendCardsCml(){
    this.medicalService.addCml(this.cml).subscribe((response: Cml)=> console.log(response));
   // console.log(this.cml);
  }

/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  onSendCardsPersona(){
    //console.log(this.persona);
    this.medicalService.addPersona(this.persona).subscribe((response: Persona)=> console.log(response));
  }
*/


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
