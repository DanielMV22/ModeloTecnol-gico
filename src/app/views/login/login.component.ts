import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  username='';
  password='';

  constructor(private route:Router){}

  onClick(){
    console.log(this.username);
    console.log(this.password);
    if(this.username=="admin" && this.password=="admin"){
      this.route.navigate(['/dashboard']);
    }else{
      alert('Acceso denegado');
      this.password='';
      this.route.navigate(['/login']);
    }
    console.log(this.username+this.password);
  }

}
