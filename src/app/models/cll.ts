import { General } from './general';
import { Sign } from './sign';
import { Symptom } from './symptom';
import { LabResult } from './labResult';

export class Cll {
    general : General = new General;
    sign: Sign= new Sign;
    symptom: Symptom= new Symptom;
    labResult: LabResult= new LabResult;
    constructor(){
        this.general.PreviousDiseases=false,
        this.sign.Fatigue=false,
        this.sign.ShortnessOfBreathDuringActivities=false,
        this.sign.EnlargedLymphNodes=false,
        this.sign.LowGradeFever=false,
        this.sign.Weightloss=false,
        this.symptom.NightSweats=false,
        this.symptom.FeelingFull=false,
        this.symptom.InfectionOfTheSkinLungsKidneysOrOtherOrgans=false,
        this.symptom.ShortOfBreath=false,
        this.symptom.Exhausted=false,
        this.labResult.InsufficientNumberOfPlatelets =false,
        this.labResult.CD38=false,
        this.labResult.Beta2Microglobulin =false,
        this.labResult.AbnormalIncreaseLymphocytesBlood=false,
        this.labResult.Anemia=false
    }
}