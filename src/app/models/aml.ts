import { General } from './general';
import { Sign } from './sign';
import { Symptom } from './symptom';
import { LabResult } from './labResult';

export class Aml {
    general : General = new General;
    sign: Sign= new Sign;
    symptom: Symptom= new Symptom;
    labResult: LabResult= new LabResult;
    constructor(){
        this.general.DNADamage=false,
        this.general.PreviousDiseases=false,
        this.general.PreviousInjuries=false,

        this.sign.Pallor=false,
        this.sign.FrequentInfections=false,
        this.sign.Bruises=false,
        this.sign.ProlongedBleedingFromMinorCuts=false,
        this.sign.AppearanceOfRedDotOnTheSkin=false
        this.sign.FrequentNosebleeds=false,
        this.sign.BleedingGums=false,
        this.sign.BloodInTheUrine=false,
        this.sign.SwellingOfTheLymphNodes=false,
        this.sign.Weightloss=false,

        this.symptom.Fatigue=false,
        this.symptom.ShortnessOfBreathDuringNormalPhysicalActivities=false,
        this.symptom.Dizziness=false,
        this.symptom.NightSweats=false,
        this.symptom.EnlargedSpleen=false,
        this.symptom.PainOrAFeelingOfFullnessUnderTheRibs=false,
        this.symptom.InfectionOfTheSkinLungsKidneysOrOtherOrgans=false,
      
        
        this.labResult.InsufficientAmountOfRedBloodCells=false,
        this.labResult.InsufficientNumberOfPlatelets=false,
        this.labResult.InsufficientAmountOfNeutrophils=false,
        this.labResult.Hyperdiploidy=false,
        this.labResult.FusionGeneBCRABL1=false,
        this.labResult.Ikaros=false,
        this.labResult.ETP=false

        
    }
}