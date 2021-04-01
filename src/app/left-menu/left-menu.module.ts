import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-menu.component';

@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    RouterModule
  ],
  providers: [],
  exports: [LeftMenuComponent]
})
export class LeftMenuModule { }
