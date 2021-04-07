import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { CreateIndentRequestComponent } from './create-request';
import { IndentRequestListComponent } from './indent-request-list.component';
import { RequestDetailsService } from './request-details.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndentRequestListComponent
  },
  {
    path: 'create',
    component: CreateIndentRequestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [RequestDetailsService],
  exports: [RouterModule]
})
export class IndentRequestRoutingModule { }
