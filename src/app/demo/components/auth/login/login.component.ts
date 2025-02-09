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

    valCheck: string[] = ['remember'];

    password!: string;

    returnUrl: string = null;

    loading: boolean = false;

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
    }

    // onSubmit(form: NgForm) {

    //     if (!form.valid) {
    //         return false;
    //     }

    //     if (this.dados.lembrarLogin) {
    //         localStorage.setItem('lembrarLogin', this.dados.login);
    //     }

    //     if (this.loadingError) {
    //         this.loadingError = false;
    //     }

    //     this.loading = true;

    //     this.service.login(this.dados.login, this.dados.password).pipe(first())
    //         .subscribe(
    //             (res) => {
    //                 if (res == undefined) {
    //                     return this.errorLogin();
    //                 }

    //                 this.store.dispatch(new Login({ token: res.token }));
    //                 localStorage.setItem(environment.tema, res.tema);

    //                 const welcome: string = `Bem - Vindo ${res.name},`;
    //                 const message: string = this.getMessage();
    //                 this.message.toastSuccess(message, welcome);

    //                 this.loading = false;
    //                 this.loadingOk = true;

    //                 setTimeout(() => {
    //                     this.router.navigate(['/restricted']);
    //                 }, 1500);
    //             },
    //             error => {
    //                 this.errorLogin();
    //             }
    //         );
    // }

    onSubmit(form: NgForm) {

        if (!form.valid) return;

        this.loading = true;

        this.service.login(form.value).then(res => {
            this.store.dispatch(login({ token: res.token }));

            if (this.returnUrl && this.returnUrl != '/restricted/dashboard') this.router.navigate([this.returnUrl]);
            else this.router.navigate(['/restricted/dashboard']);

        })
            .catch(err => console.error(err))
            .finally(() => this.loading = false)
    }
}
