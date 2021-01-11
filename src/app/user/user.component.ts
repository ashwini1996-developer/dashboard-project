import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup } from '@angular/forms';
import {AuthService } from '../core/services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 userLoginForm:FormGroup;
 submitted:Boolean=false;
  constructor(private fb:FormBuilder,private auth : AuthService,private router:Router) { }
  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      userName: ['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit() {
    console.log('userLoginForm',this.userLoginForm);
    this.submitted=true;
      console.log('this.submitted',this.submitted);
    if(this.userLoginForm.valid) {
      let username= this.userLoginForm.value.userName;
      let password= this.userLoginForm.value.password;
      let message = this.auth.userLogin(username,password);
      if(message= "Login Sucessefully") {
        this.router.navigateByUrl('user-dashboard');
      } else { 
        this.userLoginForm.reset();
      }
    }
  }
}
