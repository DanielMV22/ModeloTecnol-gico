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

  patients: Patient[] = [];
  patientNew: Patient = new Patient();
  localPatient:any;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  // status: { isOpen: boolean } = { isOpen: false };

  constructor(private medicalService: MedicalService) {
    this.localPatient = medicalService.readLocal("patient");
  }

  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel']
    };
    if (this.localPatient != null) {
      let arr = this.medicalService.readLocal("patient");
      (arr as any).forEach(e => {
        this.patients.push(e);
      });
      setTimeout(()=> {
        this.dtTrigger.next();
    }, 1000); 
    } else {
      this.medicalService.getPatients().subscribe(
        resp => {
          (resp as any).data.forEach(e => {
            this.patients.push(e);
          });
          this.dtTrigger.next();
        }, err => console.log(err));
    }
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  // toggleDropdown($event: MouseEvent): void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isOpen = !this.status.isOpen;
  // }

  // change(value: boolean): void {
  //   this.status.isOpen = value;
  // }

  onNew() {
    this.patientNew = new Patient();
    this.largeModal.show();
  }

  onSaveEdit() {
    this.patients.push(this.patientNew);
    this.medicalService.writeLocall("patient", this.patients);
    this.largeModal.hide();
  }

}