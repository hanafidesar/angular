import { ButtonModule } from 'primeng/components/button/button';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/components/common/shared';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    DataTableModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent]
})
export class ProductsModule { }
