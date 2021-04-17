import { Component, Input } from '@angular/core';
import { Aml } from '../../../../models/aml';

@Component({
  selector: 'app-detallediagnosticoamlfalse',
  templateUrl: './detallediagnosticoamlfalse.component.html',
  styleUrls: ['./detallediagnosticoamlfalse.component.css']
})

//! AML - FALSE
export class DetallediagnosticoamlfalseComponent  {

  @Input() aml: Aml;
  @Input() isPatient:boolean;
  @Input() showAml:boolean;

  constructor() { }


}
