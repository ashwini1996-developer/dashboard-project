import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { UserComponent } from './user.component';
import { UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AuthGuardGuard } from '../core/auth-guard.guard';
const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register-user',component: RegistrationComponent},
  {path: 'user-dashboard', 
  canActivate:[AuthGuardGuard],
  component:UserDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
