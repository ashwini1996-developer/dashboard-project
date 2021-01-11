import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import {RoleGuardGuard } from '../core/role-guard.guard';
const routes: Routes = [
  { path: '', component: AdminComponent},
  
  {path:'dashboard' ,
  canActivate:[RoleGuardGuard],
  component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
