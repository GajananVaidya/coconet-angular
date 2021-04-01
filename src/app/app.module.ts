import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './header';
import { IndentRequestListComponent } from './indent-request-list/indent-request-list.component';
import { LeftMenuModule } from './left-menu';
import { AuthGuardService, AuthService } from './service';

@NgModule({
  declarations: [
    AppComponent,
    IndentRequestListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    LeftMenuModule
  ],
  providers: [MatIconRegistry, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
