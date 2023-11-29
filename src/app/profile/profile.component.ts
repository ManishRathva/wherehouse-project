import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  changePass:FormGroup;
  editForm:FormGroup;
  public data: any;
  constructor(
    private fb:FormBuilder,
  ) {
    this.editForm = fb.group({
      admin_name:['',Validators.required],
      username:['',Validators.required],
      mobile_number:['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required]
    });

    this.changePass = fb.group({
      oldPassword:['',Validators.required],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    });
  }

  ngOnInit() {

  }
  profilData(data:any){
    console.log('MMMMMMMMMMMMMMMMMMMM',data.value);
    
  }
  changePassword(data:any){

  }

}
