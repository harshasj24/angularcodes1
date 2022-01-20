import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashbordComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [DashbordComponent, LoginComponent],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
