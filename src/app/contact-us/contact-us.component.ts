import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{

  conatctForm:FormGroup;

  constructor(private fb:FormBuilder){
   this.conatctForm = fb.group({
    name:['',Validators.required],
    surname:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    message:['',Validators.required],
   })
  }

  ngOnInit(): void {
    
  }
  submitData(data:any){
    console.log(this.conatctForm.value);
  }
}
