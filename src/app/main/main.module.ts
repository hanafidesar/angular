import { CommonModule } from '@angular/common';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PaginatorModule as PrimeNgPaginatorModule } from 'primeng/components/paginator/paginator';

import { SharedModule} from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { LazyCreateComponent } from './component/home/lazy-create/lazy-create.component';
import { LazyDeleteComponent } from './component/home/lazy-delete/lazy-delete.component';
import { LazyEditComponent } from './component/home/lazy-edit/lazy-edit.component';
import { LoginComponent } from './component/auth/login/login.component';
import { LoginService } from './services/auth-service/login.service';
import { MainRoutingModule } from './main-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    MainRoutingModule,
    MdCardModule,
    PrimeNgPaginatorModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    LazyCreateComponent,
    LazyDeleteComponent,
    LazyEditComponent,
    LoginComponent],
  providers: [LoginService],
  bootstrap: [HomeComponent, LoginComponent]
})

export class MainModule { }