import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
