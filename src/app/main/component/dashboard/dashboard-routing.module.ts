import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

const routes: Routes = [
    {
        path: 'dashboard-main',        
        data: {
            title: 'Empty Product'
        },
        children: [
            {
                path: '',
                component: DashboardMainComponent,
                data: {
                    title: 'Empty Product'
                }
            } 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
