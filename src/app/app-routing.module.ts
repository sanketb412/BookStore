import { SignupuserComponent } from './components/signupuser/signupuser.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginuserComponent },
      { path: 'signup', component: SignupuserComponent },
    ]
  },
  { path: 'home', component: HomepageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orderplaced', component: OrderplacedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
