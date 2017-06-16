import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyCreateComponent } from './home/lazy-create/lazy-create.component';
import { LazyEditComponent } from './home/lazy-edit/lazy-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'create',
                component: LazyCreateComponent
            },
            {
                path: 'edit',
                component: LazyEditComponent
            }]
    }
]


export const routing: ModuleWithProviders = RouterModule.forChild(routes);