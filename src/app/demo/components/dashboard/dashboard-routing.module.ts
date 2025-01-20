import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', pathMatch: 'full', redirectTo: 'dashboard'},

        { path: 'dashboard', component: DashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
