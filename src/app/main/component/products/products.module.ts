import { ButtonModule } from 'primeng/components/button/button';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule} from '../../../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './products-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductCreateComponent, ProductEditComponent]
})
export class ProductsModule { }
