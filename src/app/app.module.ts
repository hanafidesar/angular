import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routingComponent,AppRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { CreateFormComponent } from './main/create-form/create-form.component';
import { EditFormComponent } from './main/edit-form/edit-form.component';
import { EditDataFormComponent } from './main/edit-data-form/edit-data-form.component';
import { EditServiceService } from './services/main-service/edit-service.service';
import { DataGeneralService } from './services/main-service/data-general.service';

import { SharedModule as PrimeNgSharedModule } from 'primeng/components/common/shared';
import { DataTableModule as PrimeNgDataTableModule } from 'primeng/components/datatable/datatable';

import { ListboxModule, CalendarModule } from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideComponent,
    CreateFormComponent,
    EditFormComponent,
    EditDataFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PrimeNgSharedModule,
    PrimeNgDataTableModule,ReactiveFormsModule,
     ListboxModule, CalendarModule
  ],
  providers: [EditServiceService, DataGeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
