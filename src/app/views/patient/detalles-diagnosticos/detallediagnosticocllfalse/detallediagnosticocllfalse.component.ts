import { Component, Input } from '@angular/core';
import { Cll } from '../../../../models/cll';

@Component({
  selector: 'app-detallediagnosticocllfalse',
  templateUrl: './detallediagnosticocllfalse.component.html',
  styleUrls: ['./detallediagnosticocllfalse.component.css']
})
export class DetallediagnosticocllfalseComponent  {
  @Input() cll: Cll;
  @Input() isPatient:boolean;
  @Input() showCll:boolean;
  constructor() { }

 

}
