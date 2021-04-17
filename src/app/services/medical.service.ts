import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { All } from '../models/all';
import { Cll } from '../models/cll';
import { Aml } from '../models/aml';
import { Cml } from '../models/cml';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  urlPatient = 'assets/json/patient.json';
  urlTicket = 'assets/json/ticket.json';

  //urlPersona='https://localhost:44386/api/Personas';
  urlDeseaseAll='https://mtappdtcpapimanagement.azure-api.net/Diagnostico/ALL';
  urlDeseaseCml='https://mtappdtcpapimanagement.azure-api.net/Diagnostico/CML';
  urlDeseaseAml='https://mtappdtcpapimanagement.azure-api.net/Diagnostico/AML';
  urlDeseaseCll='https://mtappdtcpapimanagement.azure-api.net/Diagnostico/CLL';


  constructor(private http: HttpClient) {
    console.log('servicio inicializado')
   }

  getPatients() {
    return this.http.get(this.urlPatient);
  }
  getTickets() {
    return this.http.get(this.urlTicket);
  }
  readLocal(name){
    return JSON.parse(localStorage.getItem(name));
  }
  writeLocall(name,item){
    localStorage.setItem(name,JSON.stringify(item));
  }

/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  addPersona(persona: Persona): Observable<Persona> {
    alert("Se ingreso correctamente")
    return this.http.post<Persona>(this.urlPersona, persona);
   }
  
*/


  addAll(all: All): Observable<All> {
    return this.http.post<All>(this.urlDeseaseAll, all);
  }
  addCll(cll: Cll): Observable<Cll> {
    return this.http.post<Cll>(this.urlDeseaseCll, cll);
  }  

  addAml(aml: Aml): Observable<Aml> {
    return this.http.post<Aml>(this.urlDeseaseAml, aml);
  }
  addCml(cml: Cml): Observable<Cml> {
    return this.http.post<Cml>(this.urlDeseaseCml, cml);
  }


}
