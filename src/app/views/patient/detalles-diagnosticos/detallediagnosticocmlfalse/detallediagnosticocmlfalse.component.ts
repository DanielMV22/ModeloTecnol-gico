import { Component, Input } from '@angular/core';
import { Cml } from '../../../../models/cml';

@Component({
  selector: 'app-detallediagnosticocmlfalse',
  templateUrl: './detallediagnosticocmlfalse.component.html',
  styleUrls: ['./detallediagnosticocmlfalse.component.css']
})
export class DetallediagnosticocmlfalseComponent {

  @Input() cml: Cml;
  @Input() isPatient:boolean;
  @Input() showCml:boolean;


  constructor() { }

}
