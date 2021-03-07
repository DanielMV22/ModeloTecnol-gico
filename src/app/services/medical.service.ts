import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  urlPatient = 'assets/json/patient.json';

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get(this.urlPatient);
  }

  readLocal(name){
    return JSON.parse(localStorage.getItem(name));
  }
  
  writeLocall(name,item){
    localStorage.setItem(name,JSON.stringify(item));
  }

}
