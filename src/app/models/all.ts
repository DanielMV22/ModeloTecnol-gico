import { General } from './general';
import { Sign } from './sign';
import { Symptom } from './symptom';
import { LabResult } from './labResult';

export class All {
    general : General = new General;
    sign: Sign= new Sign;
    symptom: Symptom= new Symptom;
    labResult: LabResult= new LabResult;
    
    constructor(){
        this.general.Age=false,
        this.general.AdvancedPaternalAge=false,
        this.general.MaternalFetalLoss=false,
        this.general.XRayExposureAtBirth=false,
        this.general.PreviousChemotherapyOrRadiotherapy=false,
        this.general.InheritedConditions=false,

        this.sign.Pallor=false,
        this.sign.EnlargedLiverOrSpleen=false,
        this.sign.Infections=false,
        this.sign.Bruises=false,
        this.sign.LumpsInNeckOrUnderArmOrStomachOrGroinArea=false,

        this.symptom.ProlongedFever=false,
        this.symptom.BoneAche=false,
        this.symptom.SwellingOfTheLymphNodes=false,
        this.symptom.PetechiaeAndDyspnea=false,
        this.symptom.Headache=false,
        this.symptom.FeelingTired=false,
        this.symptom.LossOfAppetite=false,
        
        this.labResult.LeukemicBlasts=false,
        this.labResult.WhiteBloodCellCount=false,
        this.labResult.PositiveCytogeneticAnalysis=false
      
    }  
}
