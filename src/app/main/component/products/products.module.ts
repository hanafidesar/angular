import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/primeng';

import { CommonModule } from '@angular/common';

import { DataTableModule, SharedModule } from 'primeng/primeng';
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
