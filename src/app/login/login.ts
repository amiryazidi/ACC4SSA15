import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  l =  new FormControl('',Validators.required)
  pwd = new FormControl('', Validators.required)



  loginForm = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    telephone : new FormControl('', [Validators.required,Validators.pattern('^[0-9]{8}$')]),
    adresse:new FormControl('', Validators.required),
  })
  save(){
    console.log(this.l)
  }
}
