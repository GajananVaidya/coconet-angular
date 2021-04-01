import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './login.component';
@NgModule({
    declarations: [LoginFormComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule
    ],
    bootstrap: [LoginFormComponent],
    exports: [LoginFormComponent]
})
export class LoginModule { }
