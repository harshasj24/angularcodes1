import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifygaurdGuard } from './gaurds/verifygaurd.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegistrationComponent },
  {
    path: 'Dashbord',
    component: DashboardComponent,
    canActivate: [VerifygaurdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
