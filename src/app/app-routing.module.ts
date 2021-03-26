import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndentRequestListComponent } from './indent-request-list/indent-request-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'indent-request-list', pathMatch: 'full' },
  { path: 'indent-request-list', component: IndentRequestListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
