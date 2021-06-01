import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './component/auth/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/main/component/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: '',
                loadChildren: 'app/main/component/user-profile/user-profile.module#UserProfileModule'
            },
            {
                path: '',
                loadChildren: 'app/main/component/products/products.module#ProductsModule'
            },
            {
                path: '',
                loadChildren: 'app/main/component/company/company.module#CompanyModule'
            },
            {
                path: '',
                loadChildren: 'app/main/component/work-experiance/work-experiance.module#WorkExperianceModule'
            },
            {
                path: '',
                loadChildren: 'app/main/component/education/education.module#EducationModule'
            }]
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }