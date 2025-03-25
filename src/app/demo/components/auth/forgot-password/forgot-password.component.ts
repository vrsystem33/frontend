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

    constructor(private authService: AuthService) { }

    onSubmit(form: NgForm) {
        if (!form.valid) return;

        const email = form.value.email;

        this.authService.passwordRecovery({ email }).subscribe({
            next: (res) => {
                this.message = 'Link de recuperação enviado! Verifique seu e-mail.';
                form.reset();
            },
            error: (err) => {
                this.errorMessage = 'Erro ao enviar o link. Tente novamente mais tarde.';
            }
        });
    }

}
