import { General } from './general';
import { Sign } from './sign';
import { Symptom } from './symptom';
import { LabResult } from './labResult';

export class Cml {
    general : General = new General;
    sign: Sign= new Sign;
    symptom: Symptom= new Symptom;
    labResult: LabResult= new LabResult;
    constructor(){
        this.general.DNADamage=false,
        this.general.RadiationExposure=false,


        this.sign.UnexplainedWeightLoss=false,
        this.sign.Pallor=false,
        this.sign.Bruising=false,
        this.sign.GumOrNoseBleeds=false,
        this.sign.Infections=false,
        this.sign.DisseminatedNodules=false,
        this.sign.SwollenGums=false,
        this.sign.ProlongedBleedingFromMinorCuts=false,


        this.symptom.FeelingTired=false,
        this.symptom.Dizziness=false,
        this.symptom.Fever=false,
        this.symptom.Headache=false,
        this.symptom.Drowsiness=false,
        this.symptom.BlurryVision=false,
        this.symptom.PainOrAFeelingOfFullnessUnderTheRibs=false,
        this.symptom.ShortnessOfBreathDuringBasicDailyActivities=false,
        this.symptom.Weakness=false,
        this.symptom.Fatigue=false,

        
        this.labResult.HigherWhiteBloodCellCounts=false,
        this.labResult.PhiladelphiaChromosome=false,
        this.labResult.FusionGeneBCRABL1=false,
        this.labResult.InsufficientAmountOfRedBloodCells=false,
        this.labResult.ElevatedNumberOfWhiteBloodCells =false



        
    }
}