import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'MENU',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/restricted/dashboard']
                    },
                    {
                        label: 'Cadastro',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            {
                                label: 'Clientes',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Fornecedores',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Transportadoras',
                                icon: 'pi pi-fw pi-truck',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Emitentes',
                                icon: 'pi pi-fw pi-briefcase',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Produtos',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Formas de Pagamento',
                                icon: 'pi pi-fw pi-credit-card',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Usuários',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/auth/access']
                            },
                        ]
                    },
                    {
                        label: 'Vendas',
                        icon: 'pi pi-fw pi-dollar',
                        items: [
                            {
                                label: 'Balcão',
                                icon: 'pi pi-fw pi-shopping-bag',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Vendedor Externo',
                                icon: 'pi pi-fw pi-shopping-cart',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'PDV',
                                icon: 'pi pi-fw pi-desktop',
                                routerLink: ['/auth/error']
                            }
                        ]
                    },
                    {
                        label: 'Fiscal',
                        icon: 'pi pi-fw pi-file-edit',
                        items: [
                            {
                                label: 'NFe',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Monitor Fiscal',
                                icon: 'pi pi-fw pi-briefcase',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Financeiro',
                        icon: 'pi pi-fw pi-chart-line',
                        items: [
                            {
                                label: 'Caixa',
                                icon: 'pi pi-fw pi-wallet',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Contas',
                                icon: 'pi pi-fw pi-user',
                                items: [
                                    {
                                        label: 'Receber',
                                        icon: 'pi pi-fw pi-sign-in',
                                        routerLink: ['/auth/login']
                                    },
                                    {
                                        label: 'Pagar',
                                        icon: 'pi pi-fw pi-lock',
                                        routerLink: ['/auth/access']
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Relatórios',
                        icon: 'pi pi-fw pi-chart-pie',
                        items: [
                            {
                                label: 'NFe',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Monitor Fiscal',
                                routerLink: ['/auth/access']
                            }
                        ]
                    }
                ]
            },
            // {
            //     label: 'Home',
            //     items: [
            //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/restricted/dashboard'] }
            //     ]
            // },
            // {
            //     label: 'UI Components',
            //     items: [
            //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/restricted/uikit/formlayout'] },
            //         { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/restricted/uikit/input'] },
            //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/restricted/uikit/floatlabel'] },
            //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/restricted/uikit/invalidstate'] },
            //         { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/restricted/uikit/button'] },
            //         { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/restricted/uikit/table'] },
            //         { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/restricted/uikit/list'] },
            //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/restricted/uikit/tree'] },
            //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/restricted/uikit/panel'] },
            //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/restricted/uikit/overlay'] },
            //         { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/restricted/uikit/media'] },
            //         { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/restricted/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
            //         { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/restricted/uikit/message'] },
            //         { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/restricted/uikit/file'] },
            //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/restricted/uikit/charts'] },
            //         { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/restricted/uikit/misc'] }
            //     ]
            // },
            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/restricted/blocks'], badge: 'NEW' },
            //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Utilities',
            //     items: [
            //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/restricted/utilities/icons'] },
            //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Pages',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Landing',
            //             icon: 'pi pi-fw pi-globe',
            //             routerLink: ['/landing']
            //         },
            //         {
            //             label: 'Auth',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //                 {
            //                     label: 'Login',
            //                     icon: 'pi pi-fw pi-sign-in',
            //                     routerLink: ['/auth/login']
            //                 },
            //                 {
            //                     label: 'Error',
            //                     icon: 'pi pi-fw pi-times-circle',
            //                     routerLink: ['/auth/error']
            //                 },
            //                 {
            //                     label: 'Access Denied',
            //                     icon: 'pi pi-fw pi-lock',
            //                     routerLink: ['/auth/access']
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Crud',
            //             icon: 'pi pi-fw pi-pencil',
            //             routerLink: ['/restricted/pages/crud']
            //         },
            //         {
            //             label: 'Timeline',
            //             icon: 'pi pi-fw pi-calendar',
            //             routerLink: ['/restricted/pages/timeline']
            //         },
            //         {
            //             label: 'Not Found',
            //             icon: 'pi pi-fw pi-exclamation-circle',
            //             routerLink: ['/notfound']
            //         },
            //         {
            //             label: 'Empty',
            //             icon: 'pi pi-fw pi-circle-off',
            //             routerLink: ['/restricted/pages/empty']
            //         },
            //     ]
            // },
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Get Started',
            //     items: [
            //         {
            //             label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
            //         },
            //         {
            //             label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
            //         }
            //     ]
            // }
        ];
    }
}
