import { LOCALE_ID, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localeBr from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/pt';

import { InterceptService } from './services/intercept.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';

import { authReducer } from './core/reducers/auth.reducers';
import { reducers, metaReducers } from './core/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/effects/auth.effect';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { HttpProgressInterceptor } from './helpers/http-progress.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

registerLocaleData(localeBr, 'br', localeBrExtra);

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ToastrModule.forRoot(),
        NgxMaskDirective,

        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreModule.forRoot({ auth: authReducer }),
        EffectsModule.forRoot([AuthEffects]),
        // AuthEffects,
        // EffectsModule,
        // StoreModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true },
        { provide: LOCALE_ID, useValue: 'br' },
        // { provide: HTTP_INTERCEPTORS, useClass: HttpProgressInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        provideNgxMask()
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
