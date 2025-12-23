import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { MessageService } from '@app/services/message.service';
import { Store } from '@ngrx/store';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { login } from 'src/app/core/actions/auth.action';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    // valCheck: string[] = ['remember'];

    password!: string;

    returnUrl: string = null;

    loading: boolean = false;

    rememberme: boolean = true;

    constructor(
        public layoutService: LayoutService,
        private message: MessageService,
        private store: Store,
        private service: AuthService,
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = event.url;
                const params = new URLSearchParams(url.split('?')[1]);
                this.returnUrl = params.get('returnUrl');
            }
        });

        this.rememberme = localStorage.getItem('rememberme') == 'true';
    }

    onSubmit(form: NgForm) {

        if (!form.valid) return;

        localStorage.setItem('rememberme', this.rememberme.toString());

        this.loading = true;

        this.service.login(form.value).then(res => {
            this.store.dispatch(login({ token: res.token }));

            if (this.returnUrl && this.returnUrl != '/restricted/dashboard') this.router.navigate([this.returnUrl]);
            else this.router.navigate(['/restricted/dashboard']);

        })
        .catch(err => console.error(err))
        .finally(() => this.loading = false);
    }

    checkRemember(event: Event): void {
        // Previne o comportamento padrão do evento, se necessário
        event.preventDefault();
    
        // Altera o valor de rememberme
        this.rememberme = !this.rememberme;
    
        // Salva o valor no localStorage, se necessário
        localStorage.setItem('rememberme', this.rememberme.toString());
    
        // Exibe o evento no console para depuração
        console.log('Evento de clique capturado:', event);
        console.log('Valor de rememberme:', this.rememberme);
    }
}
