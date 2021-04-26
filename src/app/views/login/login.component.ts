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

  inputCheck(){  
    if(this.username.length < 11 && this.username.length > 4  && this.password.length < 11 && this.password.length > 5){
      return false; 
    }else{
      return true; 
    }
  }

  onClick(){
    console.log(this.username);
    console.log(this.password);
    if(this.username=="admin1" && this.password=="admin1"){
      this.route.navigate(['/patient/list']);
    }else{
      alert('El usuario o contraseña son incorrectos');
      this.password='';
      this.route.navigate(['/login']);
    }
    console.log(this.username+this.password);
  }

}
