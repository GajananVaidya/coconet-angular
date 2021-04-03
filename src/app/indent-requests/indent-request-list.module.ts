import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndentRequestListComponent } from './indent-request-list.component';
import { IndentRequestRoutingModule } from './indent-request-list.routing.module';
import { RequestDetailsService } from './request-details.service';
@NgModule({
    declarations: [IndentRequestListComponent],
    imports: [
        FormsModule,
        IndentRequestRoutingModule,
        CommonModule
    ],
    providers: [RequestDetailsService]
})
export class IndentRequestModule { }
