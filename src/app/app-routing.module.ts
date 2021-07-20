import { SignupuserComponent } from './components/signupuser/signupuser.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent,
    children: [
      {path: 'loginuser', component: LoginuserComponent},
      {path: 'signupuser', component: SignupuserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
