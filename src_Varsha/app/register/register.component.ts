import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ValidationService } from './validation.service';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: any;
   drop:string;
   message :string[]=['SMS','EMAIL','WHATSAPP'];
  constructor(private formBuilder: FormBuilder,private registerservice:RegisterService) 
  {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      dropdown:['',Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phone:['',[Validators.required,ValidationService.pValidator,ValidationService.minlengthValidator,ValidationService.maxlengthValidator]],
      WhatsApp:['',[Validators.required,ValidationService.pValidator,Validators.minLength(10),Validators.maxLength(10)]]
    });

    
  }
  
   
  onSubmit()
  {
    
    this.registerservice.register(this.registerForm.value)
    .subscribe(
      response=>console.log('Success',response),
      error=>console.log('Error',error)
    );
  }
}


