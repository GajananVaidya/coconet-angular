import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndentRequestListComponent } from './indent-request-list/indent-request-list.component';
import { LoginFormComponent } from './login';
import { SettingsComponent } from './settings';
import {
  AuthGuardService as AuthGuard
} from './service';
const routes: Routes = [
  { path: '', redirectTo: 'indent-requests', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'indent-requests', component: IndentRequestListComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
