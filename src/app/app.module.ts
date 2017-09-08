import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ListboxModule, CalendarModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { SharedModule as PrimeNgSharedModule } from 'primeng/components/common/shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ListboxModule,
    PrimeNgDataTableModule,
    PrimeNgSharedModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
