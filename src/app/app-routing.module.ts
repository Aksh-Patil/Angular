import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [{path: 'about', component:AboutComponent},
{path:'react-form', component:ReactiveFormComponent},
{path:'login', component:LoginComponent},
{path:'register', component: RegistrationComponent},
{path:'login2', component: Login2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
