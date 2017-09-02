import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyCreateComponent } from './component/home/lazy-create/lazy-create.component';
import { LazyEditComponent } from './component/home/lazy-edit/lazy-edit.component';
import { HomeComponent } from './component/home/home.component';
//layout
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent} from './component/auth/login/login.component';

const routes: Routes = [
    {
        path: 'main',
        component: LayoutComponent,
        children: [
            {
                path: '',
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
            }]
    },
    {
        path: '',
        component: LoginComponent
    },
]


export const routing: ModuleWithProviders = RouterModule.forChild(routes);