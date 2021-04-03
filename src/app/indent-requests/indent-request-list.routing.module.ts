import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IndentRequestListComponent } from './indent-request-list.component';
import { RequestDetailsComponent } from './request-details';

const routes: Routes = [
  {
    path: '',
    component: IndentRequestListComponent,
    children: [
      {
        path: 'view/:id',
        component: RequestDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [RequestDetailsComponent],
  exports: [RouterModule]
})
export class IndentRequestRoutingModule { }
