import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogFormComponent } from './components/log-form/log-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    LogFormComponent
  ]
})
export class AuthModule { }
