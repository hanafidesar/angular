import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ListboxModule } from 'primeng/components/listbox/listbox';
import { LocalStorageModule } from 'angular-2-local-storage';
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
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    PrimeNgDataTableModule,
    PrimeNgSharedModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
