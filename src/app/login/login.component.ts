import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.loginForm = fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  ngOnInit(): void {
    
  }

  loginData(data:any){
    console.log(this.loginForm.value);
  }
}
