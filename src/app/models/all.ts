export class General {
    AdvancedPaternalAge:boolean
    MaternalFetalLoss:boolean
    XRayExposureAtBirth:boolean
    PreviousChemotherapyOrRadiotherapy:boolean
    InheritedConditions:boolean
    constructor(){
        this.AdvancedPaternalAge=false,
        this.MaternalFetalLoss=false,
        this.XRayExposureAtBirth=false,
        this.PreviousChemotherapyOrRadiotherapy=false,
        this.InheritedConditions=false        
    }
}

export class Sign {
    Pallor:boolean
    EnlargedLiverOrSpleen:boolean
    Infections:boolean
    Bruises:boolean
    LumpsInNeckOrUnderArmOrStomachOrGroinArea:boolean
    constructor(){
        this.Pallor=false,
        this.EnlargedLiverOrSpleen=false,
        this.Infections=false,
        this.Bruises=false,
        this.LumpsInNeckOrUnderArmOrStomachOrGroinArea=false        
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
    constructor(){
        this.ProlongedFever=false,
        this.BoneAche=false,
        this.SwellingOfTheLymphNodes=false,
        this.PetechiaeAndDyspnea=false,
        this.Headache=false,
        this.FeelingTired=false,
        this.LossOfAppetite=false
    }
}

export class LabResult{
    LeukemicBlasts:boolean
    WhiteBloodCellCount:boolean
    PositiveCytogeneticAnalysis:boolean
    constructor(){
        this.LeukemicBlasts=false,
        this.WhiteBloodCellCount=false,
        this.PositiveCytogeneticAnalysis=false
    }
}