import { Component, Input } from '@angular/core';
import { Aml } from '../../../../models/aml';


@Component({
  selector: 'app-detalle-diagnostico',
  templateUrl: './detalle-diagnostico.component.html',
  styleUrls: ['./detalle-diagnostico.component.css']
})

//! AML - TRUE
export class DetalleDiagnosticoComponent   {
  
  @Input() aml: Aml;
  @Input() isPatient:boolean;
  @Input() showAml:boolean;
  showGeneral=true;

  constructor() { }

  
  onSendCardsTratamientoAml(){
    this.showGeneral=false;
  }

}
