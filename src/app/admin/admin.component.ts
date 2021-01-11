import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup } from '@angular/forms';
import {AuthService } from '../core/services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminLoginForm:FormGroup;
 submitted:Boolean=false;
  constructor(private fb:FormBuilder,private auth : AuthService,private router:Router) { }
  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      userName: ['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit() {
    this.submitted=true;
    if(this.adminLoginForm.valid) {
      let username= this.adminLoginForm.value.userName;
      let password= this.adminLoginForm.value.password;
      let message = this.auth.adminLogin(username,password);
      if(message="Login Sucessefully") {
        this.router.navigateByUrl('admin/dashboard');
      } else { 
        this.adminLoginForm.reset();
      }
    }
  }
}
