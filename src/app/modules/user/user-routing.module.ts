import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { UsersShellComponent } from "./containers/users-shell/users-shell.component"
import { UserDetailsLayoutComponent } from "./components/user-details-layout/user-details-layout.component"
import { UserAllDetailsShellComponent } from "./containers/user-all-details-shell/user-all-details-shell.component"
import { UserPersonalDetailsShellComponent } from "./containers/user-personal-details-shell/user-personal-details-shell.component"
import { UserCompanyDetailsShellComponent } from "./containers/user-company-details-shell/user-company-details-shell.component"
import { AddUserShellComponent } from "./containers/add-user-shell/add-user-shell.component"
import { EditUserShellComponent } from "./containers/edit-user-shell/edit-user-shell.component"
import { AppGuard } from "src/app/app.guard"



const routes: Routes = [
    {path: '', component : UsersShellComponent},
    {path: 'add-user', component: AddUserShellComponent },
    {path: 'edit-user/:id', component: EditUserShellComponent, canDeactivate: [AppGuard]},
    {
        path: 'user-details/:id', 
        component: UserDetailsLayoutComponent,
        children : [
            {path: '', redirectTo : 'all', pathMatch: 'full'},
            {path: 'all', component : UserAllDetailsShellComponent},
            {path: 'personal', component: UserPersonalDetailsShellComponent},
            {path: 'company', component: UserCompanyDetailsShellComponent},
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }