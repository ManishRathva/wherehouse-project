import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
   
  registerForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.registerForm = fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ngOnInit(): void {
    
  }
  registerData(data:any){
    console.log(this.registerForm.value);
  }
}
