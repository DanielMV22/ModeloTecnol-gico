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
    if(this.username.length < 16 && this.username.length > 0  && this.password.length < 21 && this.password.length > 4){
      return false; 
    }else{
      return true; 
    }
  }

  onClick(){
    console.log(this.username);
    console.log(this.password);

    if(this.username=="admin" && this.password=="admin"){
      this.route.navigate(['/dashboard']);
    }else{
      alert('El usuario o contraseña son incorrectos');
      this.password='';
      this.route.navigate(['/login']);
    }
    console.log(this.username+this.password);
  }
}
