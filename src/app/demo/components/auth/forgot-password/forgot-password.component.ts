import { AuthService } from '@app/services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '@app/services/message.service';


@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
    isLoading: boolean = false;

    constructor(
        private authService: AuthService,
        public messages: MessageService,
    ) { }

    onSubmit(form: NgForm) {
        if (!form.valid) return;

        this.isLoading = true;
        const email = form.value.email;

        this.authService.passwordRecovery({ email }).subscribe({
            next: () => {
                this.handleSubmit();  //success message
                this.isLoading = false;
                form.reset();
            },
            error: () => {
                //message generic
                this.messages.toastError( 'Ocorreu um erro ao enviar o link de recuperação.');
                this.isLoading = false;
            }
        });
    }

    handleSubmit() {
        this.messages.toastSuccess('Se o e-mail estiver cadastrado, você receberá um link de recuperação.');
    }

}
