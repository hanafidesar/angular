// library angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routing
import { routing } from './main.routing';

// 3rd component
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';
import { PaginatorModule as PrimeNgPaginatorModule } from 'primeng/components/paginator/paginator';

// component local
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { LazyEditComponent } from './component/home/lazy-edit/lazy-edit.component';
import { LazyDeleteComponent } from './component/home/lazy-delete/lazy-delete.component';
import { LazyCreateComponent } from './component/home/lazy-create/lazy-create.component';
import { ValidationFormComponent } from '../shared/validation-form/validation-form.component';

// service
import { LoginService } from './services/auth-service/login.service';

// model
import { LayoutModule } from './layout/layout.module';

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