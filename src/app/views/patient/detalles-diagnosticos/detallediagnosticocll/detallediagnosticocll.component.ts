import { Component, Input } from '@angular/core';
import { Cll } from '../../../../models/cll';

@Component({
  selector: 'app-detallediagnosticocll',
  templateUrl: './detallediagnosticocll.component.html',
  styleUrls: ['./detallediagnosticocll.component.css']
})
export class DetallediagnosticocllComponent  {

  //@Input() aml: Aml;
  //@Input() isPatient:boolean;
  //@Input() showAml:boolean;

  @Input() cll: Cll;
  @Input() isPatient:boolean;
  @Input() showCll:boolean;
  
  constructor() { }

 

}
