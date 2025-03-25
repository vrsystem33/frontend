import { AuthService } from '@app/services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

    message: string = '';
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(
        private authService: AuthService

    ) { }

    onSubmit(form: NgForm) {
        if (!form.valid) return;

        this.isLoading = true;
        const email = form.value.email;

        this.authService.passwordRecovery({ email }).subscribe({
            next: () => {
                // message generic
                this.message = 'Se o e-mail estiver cadastrado, você receberá um link de recuperação.';
                this.isLoading = false;
                form.reset();
            },
            error: () => {
                // message generic
                this.message = 'Se o e-mail estiver cadastrado, você receberá um link de recuperação.';
                this.isLoading = false;
            }
        });
    }

}
