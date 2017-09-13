import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PaginatorModule as PrimeNgPaginatorModule } from 'primeng/components/paginator/paginator';

import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthService } from '../core/auth.service';
import { MainRoutingModule } from './main-routing.module';
import { ProfileDataService } from './services/main-service/profile-data.service';
import { ProductService } from './services/main-service/product.service';
import { SharedModule } from '../shared/shared.module';

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
    LoginComponent],
  providers: [
    AuthService,
    ProfileDataService,
    ProductService],
  bootstrap: [LoginComponent]
})

export class MainModule { }