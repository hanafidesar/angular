import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routingComponent, AppRoutingModule } from './app.routing';

import { SharedModule as PrimeNgSharedModule } from 'primeng/components/common/shared';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';

import { ListboxModule, CalendarModule } from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PrimeNgSharedModule,
    PrimeNgDataTableModule,
    ReactiveFormsModule,
    ListboxModule,
    CalendarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
