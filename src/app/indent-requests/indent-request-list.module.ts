import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndentRequestListComponent } from './indent-request-list.component';
import { IndentRequestRoutingModule } from './indent-request-list.routing.module';

@NgModule({
    declarations: [IndentRequestListComponent],
    imports: [
        FormsModule,
        IndentRequestRoutingModule,
        CommonModule
    ]
})
export class IndentRequestModule { }
