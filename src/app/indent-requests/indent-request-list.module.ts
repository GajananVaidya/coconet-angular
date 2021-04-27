import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatApplicationComponent } from '../chat-application/chat-application.component';
import { CreateIndentRequestComponent } from './create-request/create-request.component';
import { IndentRequestListComponent } from './indent-request-list.component';
import { IndentRequestRoutingModule } from './indent-request-list.routing.module';
import { RequestDetailsComponent } from './request-details';
import { RequestDetailsService } from './request-details.service';
@NgModule({
    declarations: [IndentRequestListComponent, RequestDetailsComponent, CreateIndentRequestComponent, ChatApplicationComponent],
    imports: [
        FormsModule,
        IndentRequestRoutingModule,
        CommonModule
    ],
    providers: [RequestDetailsService],
})
export class IndentRequestModule { }
