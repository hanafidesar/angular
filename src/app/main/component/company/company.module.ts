import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmBsbya9UgiHjLlbDB9cUzHfSpG39vQn0',
      libraries: ['places']
    }),
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyInfoComponent]
})

export class CompanyModule { }
