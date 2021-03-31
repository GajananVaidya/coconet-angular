import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndentRequestListComponent } from './indent-request-list/indent-request-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'indent-requests', pathMatch: 'full' },
  { path: 'indent-requests', component: IndentRequestListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
