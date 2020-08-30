import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

 
  userForm: any;

  constructor(private formBuilder: FormBuilder) 
  {
    
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['',[Validators.required,ValidationService.pValidator]],
      feedback: ['', [Validators.required, Validators.minLength(10)]]
    });

    console.log(this.userForm);
  }

  saveUser() 
  {
    if (this.userForm.dirty && this.userForm.valid) 
    {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
 
  get f(){
    return this.userForm.controls;
  }
  

}


