import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sucessMsg='Login Sucessefully';
  errorMsg='Invalid Authentication';
  constructor(private toastr: ToastrService) { }
  // user login
  userLogin(username,password) {
    if(username==='ashwini' && password==='12345') {
      this.authInfo('User');
      localStorage.setItem('key','success');
      this.showToasterSuccess(this.sucessMsg);
      return this.sucessMsg;
    } else {
      localStorage.clear();
      this.showToasterSuccess(this.errorMsg);
      return this.errorMsg;
    }
  }
  // admin login
  adminLogin(username,password) {
    if(username==='admin' && password==='12345') {
      this.authInfo('Admin');
      localStorage.setItem('key','success')
      this.showToasterSuccess(this.sucessMsg);
      return this.sucessMsg;
    } else {
      localStorage.clear();
      this.showToasterSuccess(this.errorMsg);
      return this.errorMsg;
    }
  }
  // storing role of user 
  authInfo(role) {
    localStorage.setItem('Role',role);
  }
  // show the message 
  showToasterSuccess(msg) {
    this.toastr.success(msg)
  }
  showToasterError(msg) {
    this.toastr.error(msg);
  }
}
