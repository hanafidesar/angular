
import { CommonModule } from '@angular/common';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PaginatorModule as PrimeNgPaginatorModule } from 'primeng/components/paginator/paginator';

import { HomeComponent } from './component/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { LazyCreateComponent } from './component/home/lazy-create/lazy-create.component';
import { LazyDeleteComponent } from './component/home/lazy-delete/lazy-delete.component';
import { LazyEditComponent } from './component/home/lazy-edit/lazy-edit.component';
import { LoginComponent } from './component/auth/login/login.component';
import { LoginService } from './services/auth-service/login.service';
import { routing } from './main.routing';
import { ValidationFormComponent } from '../shared/validation-form/validation-form.component';

@NgModule({
  imports: [
    routing,
    FormsModule,
    MdCardModule,
    LayoutModule,
    CommonModule,
    ReactiveFormsModule,
    PrimeNgPaginatorModule,
    PrimeNgDataTableModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    LazyEditComponent,
    LazyCreateComponent,
    LazyDeleteComponent,
    ValidationFormComponent],
  providers: [LoginService],
  bootstrap: [HomeComponent, LoginComponent]
})

export class MainModule { }