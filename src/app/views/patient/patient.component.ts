import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Patient } from '../../models/patient';
import { MedicalService } from '../../services/medical.service';

@Component({
  templateUrl: './patient.component.html'
})
export class PatientComponent implements OnInit, OnDestroy {

  @ViewChild('largeModal') public largeModal: ModalDirective;

  patients: Patient[] = [{"id":"PC0002","friendlyName":"DANN"}];
  patientEdit: Patient = new Patient;
  patient: any;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  status: { isOpen: boolean } = { isOpen: false };

  constructor(private medicalService:MedicalService) { }

  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel']
    };
    this.medicalService.getConfig().subscribe(
      resp=>{
        (resp as any).data.forEach(e => {
          this.patients.push(e);
        });
        this.dtTrigger.next();
      },err=>console.log(err));
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }

  change(value: boolean): void {
    this.status.isOpen = value;
  }

  onEdit() {

  }

  onSaveEdit() {

  }

}