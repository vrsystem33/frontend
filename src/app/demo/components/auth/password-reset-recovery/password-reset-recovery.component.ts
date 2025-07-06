import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { MessageService } from '@app/services/message.service';

@Component({
  selector: 'app-password-reset-recovery',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './password-reset-recovery.component.html',
  styleUrl: './password-reset-recovery.component.scss'
})
export class PasswordResetRecoveryComponent {
    isLoading: boolean = false;
    token: string = '';
    email: string = '';
    formData = {
        password: '',
        password_confirmation: ''
    };

    constructor (
        private route: ActivatedRoute,
        private authService: AuthService,
        private messages: MessageService,
        private router: Router
    ) {
        this.token = this.route.snapshot.queryParamMap.get('token') || '';
        this.email = this.route.snapshot.queryParamMap.get('email') || '';
    }

    onSubmit(form: NgForm) {
    if (!form.valid || !this.token || !this.email) {
      this.messages.toastError('Token ou e-mail inválido');
      return;
    }

    this.isLoading = true;

    this.authService.passwordReset({
      token: this.token,
      email: this.email,
      password: this.formData.password,
      password_confirmation: this.formData.password_confirmation
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.messages.toastSuccess('Senha redefinida com sucesso!');
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        this.isLoading = false;
        this.messages.toastError('Erro ao redefinir a senha.');
      }
    });
  }

}
