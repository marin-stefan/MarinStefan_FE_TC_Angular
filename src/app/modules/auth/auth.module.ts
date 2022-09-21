import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { RegisterShellComponent } from './containers/register-shell/register-shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogFormComponent } from './components/log-form/log-form.component';
import { AuthorizedLayoutComponent } from './components/authorized-layout/authorized-layout.component';
import { NonAuthorizedLayoutComponent } from './components/non-authorized-layout/non-authorized-layout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    LoginShellComponent,
    RegisterShellComponent,
    LogFormComponent,
    AuthorizedLayoutComponent,
    NonAuthorizedLayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderModule,
    FooterModule
    
  ],
  exports: [
    LoginShellComponent,
    RegisterShellComponent,
    LogFormComponent,
    NonAuthorizedLayoutComponent,
    AuthorizedLayoutComponent
  ]
})
export class AuthModule { }
