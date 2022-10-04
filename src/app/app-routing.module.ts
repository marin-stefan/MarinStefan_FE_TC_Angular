import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { Page404Component } from './modules/shared/components/page404/page404.component';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppGuard } from './app.guard';
import { RegisterShellComponent } from './modules/auth/containers/register-shell/register-shell.component';
import { LoginShellComponent } from './modules/auth/containers/login-shell/login-shell.component';
import { AuthorizedLayoutComponent } from './modules/auth/components/authorized-layout/authorized-layout.component';
import { NonAuthorizedLayoutComponent } from './modules/auth/components/non-authorized-layout/non-authorized-layout.component';
import { VehiclesShellComponent } from './modules/vehicle/containers/vehicles-shell/vehicles-shell.component';

//setting routes
const appRoute: Routes = [

  {
    path: "",
    component: NonAuthorizedLayoutComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component : LoginShellComponent},
      {path: 'register', component: RegisterShellComponent},
    ]
  },

  {
    path: "",
    component: AuthorizedLayoutComponent,
    children: [
      {path:'home', redirectTo : 'users', pathMatch: 'full' },
      {
        path: 'vehicles', component: VehiclesShellComponent, 
        // canActivate: [AppGuard] 
      },
      {
        path: "users",  
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
        // canLoad: [AppGuard],
      },
    ]
  },

  {path: '**', component: Page404Component},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
    VehicleModule,
    SharedModule,
    AuthModule,
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
