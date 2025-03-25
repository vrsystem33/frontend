import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule,
        FormsModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        ToastModule,
        RippleModule,
        ProgressSpinnerModule
    ],
    declarations: [ForgotPasswordComponent],
    providers: [MessageService]

})
export class ForgotPasswordModule { }
