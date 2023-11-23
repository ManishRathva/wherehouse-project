import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  paswordShow:boolean=true;
  otpShow:boolean = false;
  hide:boolean =false;
  clickMe(){
    this.otpShow=true;
    this.paswordShow=false;
  }
  verify(){
    this.otpShow=false;
    this.hide =true;
  }
}
