import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { MessageService } from '@app/services/message.service';
import { AuthService } from '@app/services/auth.service';
import { Store } from '@ngrx/store';
import { logout } from '@app/core/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styles: `
      .pi-bars {
        transition: transform 0.3s ease;
      }

      .pi-bars:hover {
        transform: scale(1.1);
      }
    `
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    private message: MessageService,
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {
    /*
      para usar <p-menu #menu [model]="items" popup="true" [style]="{'width': '15rem'}" [appendTo]="'body'"></p-menu>
      this.items = [
        {
          label: 'Perfil',
          icon: 'pi pi-user',
          routerLink: '/perfil'
        },
        {
          label: 'Configurações',
          icon: 'pi pi-cog',
          routerLink: '/configuracao',
          visible: true // Use this to conditionally show items
        },
        {
          separator: true
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => this.logout()
        }
      ];
    */

  }

  logout() {
    this.message.swal.fire({
      title: 'Atenção!',
      icon: 'warning',
      html: 'Deseja sair?',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Voltar',
      showCancelButton: true
    }).then(res => {
      console.log(res)
      if (!res.isConfirmed) return;

      this.store.dispatch(logout());
    });
  }
}
