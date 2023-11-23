import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'
  },
  {
    path:'homepage',component:HomeComponent,
  },
  {
    path:'homepage/details',component:HomeDetailsComponent
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'register',component:RegisterComponent,
  },
  {
    path:'forgetpassword',component:ForgetPasswordComponent,
  },
  {
    path:'about',component:AboutComponent,
  },
  {
    path:'contact',component:ContactUsComponent,
  },
  {
    path:'**',component:NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
