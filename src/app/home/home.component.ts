import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  stepOneForm: FormGroup;

  constructor(private metaservice:Meta,private title:Title,private fb: FormBuilder){
    this.stepOneForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.title.setTitle('Homepage');
    this.metaservice.addTag({
      name: 'Home',
      content: 'Welcome'
    }),
    this.metaservice.updateTag({
      name: 'homepage data',
      content: 'Welcome to Homepage'
    })
  }
  
}
