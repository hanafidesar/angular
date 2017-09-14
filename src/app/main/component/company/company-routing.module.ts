import { CompanyInfoComponent } from './company-info/company-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'company-info',
        data: {
            title: 'Company'
        },
        children: [
            {
                path: '',
                component: CompanyInfoComponent,
                data: {
                    title: 'Company'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CompanyRoutingModule { }
