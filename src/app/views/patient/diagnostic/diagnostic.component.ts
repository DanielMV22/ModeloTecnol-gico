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
  
required=null;
  required1=null;
  required2=null;

  localPatient:any;

  isExpanded: boolean;
  isExpandedA: boolean;
  isExpandedB: boolean;
  isExpandedC: boolean;

//! AML
  show:boolean=null;
  showAml=true;
  showfalse=true;
  
//!ALL

  showA:boolean=null;
  showAll=true;
  showAfalse=true;

  //!CLL

  showB:boolean=null;
  showCll=true;
  showBfalse=true;

   //!CML

   showC:boolean=null;
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
    if(!this.patient && !this.disease) { 
      this.required=true;
      return;
    }else if (!this.patient){
      this.required1=true;
      return;
    }else if (!this.disease){
      this.required2=true;
      return;
    }
    this.isPatient=false;
    
    console.log(this.patient);
  }

  limpiar(){
    this.patient=false;
    this.disease=false;
    if(this.required1==true){
      this.required1=false;
    }
    if(this.required2==true){
      this.required2=false;
    }
    if(this.required==true){
      this.required=false;
    }
  
  }
  

  onBack(){
    this.isPatient=true;
    
    this.all=new All();
    this.cll=new Cll();
    this.aml=new Aml();
    this.cml=new Cml();
  }

  onSendCardsAll(){
   // this.medicalService.addAll(this.all).subscribe((response: All)=> console.log(response));
    //console.log(this.all);

    this.showA=true;
    this.showAll=false;
    if( 
      (!this.all.general.Age || !this.all.general.AdvancedPaternalAge || !this.all.general.MaternalFetalLoss || !this.all.general.XRayExposureAtBirth || !this.all.general.PreviousChemotherapyOrRadiotherapy || !this.all.general.InheritedConditions
      || !this.all.sign.Pallor || !this.all.sign.EnlargedLiverOrSpleen
      || !this.all.symptom.ProlongedFever 
      || !this.all.labResult.LeukemicBlasts || !this.all.labResult.WhiteBloodCellCount && !this.all.labResult.PositiveCytogeneticAnalysis)
       && 
      ( !this.all.general.Age || !this.all.general.AdvancedPaternalAge || !this.all.general.PreviousChemotherapyOrRadiotherapy ||  
        !this.all.sign.Pallor || !this.all.sign.EnlargedLiverOrSpleen ||
        !this.all.labResult.LeukemicBlasts || !this.all.labResult.WhiteBloodCellCount || !this.all.labResult.PositiveCytogeneticAnalysis)
        && 
        (!this.all.general.MaternalFetalLoss || !this.all.general.XRayExposureAtBirth || !this.all.general.PreviousChemotherapyOrRadiotherapy ||
          !this.all.sign.EnlargedLiverOrSpleen ||  
          !this.all.symptom.ProlongedFever  || 
          !this.all.labResult.WhiteBloodCellCount  || !this.all.labResult.PositiveCytogeneticAnalysis))
       {
        this.showA=false;
    } 
   
   
   
    
  }
  
  onSendCardsCll(){
    //this.medicalService.addCll(this.cll).subscribe((response: Cll )=> console.log(response));

    this.showB=true;
    this.showCll=false;
   if (
     (!this.cll.general.PreviousDiseases || 
    !this.cll.sign.EnlargedLymphNodes  ||  !this.cll.sign.LowGradeFever ||  !this.cll.sign.Fatigue ||  !this.cll.sign.Weightloss || 
    !this.cll.symptom.NightSweats || !this.cll.symptom.FeelingFull || !this.cll.symptom.InfectionOfTheSkinLungsKidneysOrOtherOrgans || !this.cll.symptom.ShortOfBreath || !this.cll.symptom.Exhausted || 
     !this.cll.labResult.InsufficientNumberOfPlatelets || !this.cll.labResult.CD38 || !this.cll.labResult.Beta2Microglobulin || !this.cll.labResult.AbnormalIncreaseLymphocytesBlood || !this.cll.labResult.Anemia)
      && 
     (!this.cll.general.PreviousDiseases || 
      !this.cll.sign.Fatigue ||  !this.cll.sign.Weightloss || 
      !this.cll.symptom.NightSweats || !this.cll.symptom.Exhausted || 
      !this.cll.labResult.InsufficientNumberOfPlatelets || !this.cll.labResult.CD38 || !this.cll.labResult.Beta2Microglobulin || !this.cll.labResult.AbnormalIncreaseLymphocytesBlood || !this.cll.labResult.Anemia )
      && (!this.cll.general.PreviousDiseases 
        ||  !this.cll.sign.Weightloss || 
        !this.cll.symptom.NightSweats || !this.cll.symptom.FeelingFull ||  
        !this.cll.labResult.InsufficientNumberOfPlatelets || !this.cll.labResult.Beta2Microglobulin || !this.cll.labResult.AbnormalIncreaseLymphocytesBlood || !this.cll.labResult.Anemia)
      ){
        this.showB=false;
   }
  }
  onSendCardsAml(){
    //this.medicalService.addAml(this.aml).subscribe((response: Aml)=> console.log(response));
    this.show=true;
    this.showAml=false;

    if ((!this.aml.general.DNADamage || !this.aml.general.PreviousDiseases ||
      !this.aml.sign.ProlongedBleedingFromMinorCuts || !this.aml.sign.SwellingOfTheLymphNodes  ||  !this.aml.sign.Pallor  || 
      !this.aml.symptom.InfectionOfTheSkinLungsKidneysOrOtherOrgans  ||  !this.aml.symptom.NightSweats || !this.aml.symptom.Fatigue ||
      !this.aml.labResult.Hyperdiploidy ||  !this.aml.labResult.InsufficientNumberOfPlatelets || !this.aml.labResult.InsufficientAmountOfNeutrophils || !this.aml.labResult.InsufficientAmountOfRedBloodCells)
      && 
      (!this.aml.general.DNADamage || !this.aml.general.PreviousDiseases ||
        !this.aml.sign.Weightloss || !this.aml.sign.SwellingOfTheLymphNodes || !this.aml.sign.AppearanceOfRedDotOnTheSkin ||
        !this.aml.symptom.InfectionOfTheSkinLungsKidneysOrOtherOrgans ||  !this.aml.symptom.Dizziness ||
        !this.aml.labResult.ETP || !this.aml.labResult.InsufficientAmountOfRedBloodCells )
      ) {
        this.show=false;
    }
  }
  onSendCardsCml(){
    //this.medicalService.addCml(this.cml).subscribe((response: Cml)=> console.log(response));

    this.showC=true;
    this.showCml=false;

    if (
      (!this.cml.general.RadiationExposure || !this.cml.general.DNADamage || 
      !this.cml.sign.UnexplainedWeightLoss || !this.cml.sign.GumOrNoseBleeds ||  !this.cml.sign.Bruising ||  !this.cml.sign.ProlongedBleedingFromMinorCuts  ||  
      !this.cml.symptom.Fever || !this.cml.symptom.FeelingTired || !this.cml.symptom.Dizziness  || 
      !this.cml.labResult.InsufficientAmountOfRedBloodCells || !this.cml.labResult.PhiladelphiaChromosome)
      &&
      (!this.cml.general.RadiationExposure || !this.cml.general.DNADamage || 
        !this.cml.sign.GumOrNoseBleeds || !this.cml.sign.Bruising ||  !this.cml.sign.DisseminatedNodules || 
        !this.cml.symptom.Drowsiness || !this.cml.symptom.Headache || !this.cml.symptom.BlurryVision 
        || !this.cml.labResult.ElevatedNumberOfWhiteBloodCells  || !this.cml.labResult.InsufficientAmountOfRedBloodCells
         || !this.cml.labResult.FusionGeneBCRABL1)
         &&
       (!this.cml.general.RadiationExposure || 
      !this.cml.symptom.Fatigue || !this.cml.symptom.Dizziness  || 
      !this.cml.sign.Pallor ||  !this.cml.sign.Bruising ||  !this.cml.sign.Infections ||  
      !this.cml.labResult.ElevatedNumberOfWhiteBloodCells  || !this.cml.labResult.InsufficientAmountOfRedBloodCells || !this.cml.labResult.PhiladelphiaChromosome)
      ) {
      this.showC=false;
    }

  }




}




