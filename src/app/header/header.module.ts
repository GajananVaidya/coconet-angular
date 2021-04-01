import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    RouterModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class AppHeaderModule { }
