import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './lazy.routing';
import { LazyCreateComponent } from './home/lazy-create/lazy-create.component';
import { LazyEditComponent } from './home/lazy-edit/lazy-edit.component';
import { LazyDeleteComponent } from './home/lazy-delete/lazy-delete.component';
import { HomeComponent } from './home/home.component';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';
import { PaginatorModule as PrimeNgPaginatorModule } from 'primeng/components/paginator/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    routing,
        PrimeNgDataTableModule,
        PrimeNgPaginatorModule, ReactiveFormsModule, CommonModule, FormsModule],
  declarations: [LazyCreateComponent, LazyEditComponent, LazyDeleteComponent, HomeComponent, ],
  bootstrap: [HomeComponent]
})
export class LazyModule {}