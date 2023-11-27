import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  changePaaword:FormGroup;
  editForm:FormGroup;
  public data: any;
  constructor(
    // private apiService: ApiHandlerService,
    private http: HttpClient,
    private router: Router,
    private fb:FormBuilder,
  ) {
    this.editForm = this.fb.group({
      admin_name:['',Validators.required],
      username:['',Validators.required],
      mobile_number:['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required]
    });

    this.changePaaword = this.fb.group({
      oldPassword:['',Validators.required],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    });
  }

  ngOnInit() {

    // this.apiService.get(`${AppSettings.API_admin_details}`+ admin_id).subscribe(res => {
    //   if (res.success == true) {
    //     this.CatObj = res.data;
    //     console.log(this.CatObj);
    //   } else {
    //     alert(res.msg);
    //   }
    // });
  }
  

}
