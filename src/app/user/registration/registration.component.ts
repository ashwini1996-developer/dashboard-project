import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {Validators,FormGroup,FormBuilder } from '@angular/forms';
import {AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  submitted:Boolean=false;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
    })
  }
  submit() {
    this.submitted=true;
    if(this.registrationForm.valid) {
      this.auth.showToasterSuccess("Register suceesfully");
      this.router.navigateByUrl('/');
    }
  }

}
