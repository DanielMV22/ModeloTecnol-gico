import { Component, Input } from '@angular/core';
import { All } from '../../../../models/all';

@Component({
  selector: 'app-detallediagnosticoallfalse',
  templateUrl: './detallediagnosticoallfalse.component.html',
  styleUrls: ['./detallediagnosticoallfalse.component.css']
})
export class DetallediagnosticoallfalseComponent  {
  @Input() all: All;
  @Input() isPatient:boolean;
  @Input() showAll:boolean;
  constructor() { }

  

}
