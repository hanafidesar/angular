import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LazyCreateComponent } from './component/home/lazy-create/lazy-create.component';
import { LazyEditComponent } from './component/home/lazy-edit/lazy-edit.component';
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
                path: 'lazy',
                component: LazyCreateComponent
            },
            {
                path: 'create',
                component: LazyCreateComponent
            },
            {
                path: 'edit',
                component: LazyEditComponent
            },
            {
                path: '',
                loadChildren: 'app/main/component/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: '',
                loadChildren: 'app/main/component/user-profile/user-profile.module#UserProfileModule'
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