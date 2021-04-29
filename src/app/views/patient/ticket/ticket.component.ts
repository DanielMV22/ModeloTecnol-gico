import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Ticket } from '../../../models/ticket';
import { MedicalService } from '../../../services/medical.service';

@Component({
  templateUrl: './ticket.component.html'
})
export class TicketComponent implements OnInit {

  @ViewChild('largeModal') public largeModal: ModalDirective;

  tickets: Ticket[] = [];
  ticketNew:Ticket = new Ticket();
  fecha = new Date();
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private medicalService: MedicalService) {
  }

  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      language: {
        url:'//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      },
      buttons: []
    };
    this.medicalService.getTickets().subscribe(
      resp => {
        (resp as any).data.forEach(e => {
          this.tickets.push(e);
        });
        this.dtTrigger.next();
      }, err => console.log(err));
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  onNew() {
    this.ticketNew = new Ticket();
    this.largeModal.show();
  }

  onSaveEdit() {
    this.ticketNew.ticket='#TK002';//CAMBIAR CON UN EVENTO  
    this.ticketNew.date=this.fecha.getDate()+'/'+this.fecha.getMonth()+'/'+this.fecha.getFullYear();
    this.tickets.push(this.ticketNew);
    // this.medicalService.writeLocall("patient", this.tickets);
    this.largeModal.hide();
  }

}