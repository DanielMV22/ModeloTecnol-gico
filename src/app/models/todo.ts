export class Sigla {
    general: General;
    sign: Sign;
    sympton: Symptom;
    labResult: LabResult;
    constructor(general,sign,sympton,labResult){
        this.general=general;
        this.sign=sign;
        this.sympton=sympton;
        this.labResult=labResult;

        
    }

}


export class General {
    AdvancedPaternalAge:boolean
    MaternalFetalLoss:boolean
    XRayExposureAtBirth:boolean
    PreviousChemotherapyOrRadiotherapy:boolean
    InheritedConditions:boolean
    PreviousDiseases:boolean
    DNADamage:boolean
    PreviousInjuries:boolean
    RadiationExposure :boolean
    constructor(){
        this.AdvancedPaternalAge=false,
        this.MaternalFetalLoss=false,
        this.XRayExposureAtBirth=false,
        this.PreviousChemotherapyOrRadiotherapy=false,
        this.InheritedConditions=false,
        this.PreviousDiseases=false,
        this.DNADamage=false,
        this.PreviousInjuries=false,
        this.RadiationExposure=false
    }
}


export class Sign {
    Pallor:boolean
    EnlargedLiverOrSpleen:boolean
    Infections:boolean
    Bruises:boolean
    LumpsInNeckOrUnderArmOrStomachOrGroinArea:boolean
    Fatigue:boolean
    ShortnessOfBreathDuringActivities :boolean
    EnlargedLymphNodes:boolean
    LowGradeFever:boolean
    Weightloss:boolean
    FrequentInfections:boolean
    ProlongedBleedingFromMinorCuts:boolean
    AppearanceOfRedDotOnTheSkin:boolean
    FrequentNosebleeds:boolean
    BleedingGums:boolean
    BloodInTheUrine:boolean
    UnexplainedWeightLoss:boolean
    Bruising:boolean
    GumOrNoseBleeds:boolean
    DisseminatedNodules:boolean
    SwollenGums :boolean
    constructor(){
        this.Pallor=false,
        this.EnlargedLiverOrSpleen=false,
        this.Infections=false,
        this.Bruises=false,
        this.LumpsInNeckOrUnderArmOrStomachOrGroinArea=false,
        this.Fatigue=false,
        this.ShortnessOfBreathDuringActivities=false,
        this.EnlargedLymphNodes=false,
        this.LowGradeFever=false,
        this.Weightloss=false
        this.FrequentInfections=false,
        this.ProlongedBleedingFromMinorCuts=false,
        this.AppearanceOfRedDotOnTheSkin=false
        this.FrequentNosebleeds=false,
        this.BleedingGums=false,
        this.BloodInTheUrine=false,
        this.UnexplainedWeightLoss=false,
         this.Bruising=false,
         this.GumOrNoseBleeds=false,
         this.DisseminatedNodules=false,
         this.SwollenGums=false
    }
}

export class Symptom{
    ProlongedFever:boolean
    BoneAche:boolean
    SwellingOfTheLymphNodes:boolean
    PetechiaeAndDyspnea:boolean
    Headache:boolean
    FeelingTired:boolean
    LossOfAppetite:boolean
    NightSweats:boolean
    FeelingFull:boolean
    InfectionOfTheSkinLungsKidneysOrOtherOrgans:boolean
    ShortOfBreath:boolean
    Exhausted:boolean
    Fatigue:boolean
    ShortnessOfBreathDuringNormalPhysicalActivities:boolean
    Dizziness:boolean
    EnlargedSpleen:boolean
    PainOrAFeelingOfFullnessUnderTheRibs:boolean
    Weightloss :boolean
    Fever:boolean
    Drowsiness:boolean
    BlurryVision:boolean
    ShortnessOfBreathDuringBasicDailyActivities:boolean
    Weakness: boolean
    constructor(){
        this.ProlongedFever=false,
        this.BoneAche=false,
        this.SwellingOfTheLymphNodes=false,
        this.PetechiaeAndDyspnea=false,
        this.Headache=false,
        this.FeelingTired=false,
        this.LossOfAppetite=false,
        this.NightSweats=false,
        this.FeelingFull=false,
        this.InfectionOfTheSkinLungsKidneysOrOtherOrgans=false,
        this.ShortOfBreath=false,
        this.Exhausted=false,
        this.Fatigue=false,
        this.ShortnessOfBreathDuringNormalPhysicalActivities=false,
        this.Dizziness=false,
        this.EnlargedSpleen=false,
        this.PainOrAFeelingOfFullnessUnderTheRibs=false,
        this.Weightloss=false,
        this.Fever=false,
        this.Drowsiness=false,
        this.BlurryVision=false,
        this.ShortnessOfBreathDuringBasicDailyActivities=false,
        this.Weakness=false
    }
}

export class LabResult{
    LeukemicBlasts:boolean
    WhiteBloodCellCount:boolean
    PositiveCytogeneticAnalysis:boolean
    InsufficientNumberOfPlatelets :boolean
    CD38:boolean
    Beta2Microglobulin :boolean
    AbnormalIncreaseLymphocytesBlood : boolean
    Anemia:boolean
    InsufficientAmountOfRedBloodCells:boolean
    InsufficientAmountOfNeutrophils:boolean
    Hyperdiploidy:boolean
    FusionGeneBCRABL1:boolean
    Ikaros:boolean
    ETP :boolean
    HigherWhiteBloodCellCounts :boolean
    PhiladelphiaChromosome:boolean
    ElevatedNumberOfWhiteBloodCells : boolean
    constructor(){
        this.LeukemicBlasts=false,
        this.WhiteBloodCellCount=false,
        this.PositiveCytogeneticAnalysis=false,
        this.InsufficientNumberOfPlatelets =false,
        this.CD38=false,
        this.Beta2Microglobulin =false,
        this.AbnormalIncreaseLymphocytesBlood=false,
        this.Anemia=false,
        this.InsufficientAmountOfRedBloodCells=false,
        this.InsufficientAmountOfNeutrophils=false,
        this.Hyperdiploidy=false,
        this.FusionGeneBCRABL1=false,
        this.Ikaros=false,
        this.ETP=false,
        this.HigherWhiteBloodCellCounts=false,
        this.PhiladelphiaChromosome=false,
        this.ElevatedNumberOfWhiteBloodCells =false


    }
}
