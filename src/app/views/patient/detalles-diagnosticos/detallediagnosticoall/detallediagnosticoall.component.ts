import { Component, Input } from '@angular/core';
import { All } from '../../../../models/all';

@Component({
  selector: 'app-detallediagnosticoall',
  templateUrl: './detallediagnosticoall.component.html',
  styleUrls: ['./detallediagnosticoall.component.css']
})
export class DetallediagnosticoallComponent  {


  //@Input() aml: Aml;
  //@Input() isPatient:boolean;
  //@Input() showAml:boolean;
  @Input() all: All;
  @Input() isPatient:boolean;
  @Input() showAll:boolean;
  showGeneral=true;

  constructor() { }

  
  onSendCardsTratamientoAll(){
    this.showGeneral=false;
  }

}
