import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    {
        path: 'product',
        data: {
            title: 'Product'
        },
        children: [
            {
                path: '',
                component: ProductListComponent,
                data: {
                    title: 'Product List'
                }
            },
            {
                path: 'product-create',
                component: ProductCreateComponent,
                data: {
                    title: 'Product Create'
                }
            },
            {
                path: ':id/edit',
                component: ProductEditComponent,
                data: {
                    title: 'Product Edit',
                    editing: true
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }
