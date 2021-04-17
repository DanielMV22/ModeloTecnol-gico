import { Component, Input } from '@angular/core';
import { Cml } from '../../../../models/cml';

@Component({
  selector: 'app-detallediagnosticocml',
  templateUrl: './detallediagnosticocml.component.html',
  styleUrls: ['./detallediagnosticocml.component.css']
})
export class DetallediagnosticocmlComponent  {


  @Input() cml: Cml;
  @Input() isPatient:boolean;
  @Input() showCml:boolean;

  constructor() { }

 

}
