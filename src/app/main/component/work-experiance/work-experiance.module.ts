import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkExperianceComponent } from './work-experiance/work-experiance.component';
import { WorkExperianceRoutingModule } from './work-experiance-routing.module';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmBsbya9UgiHjLlbDB9cUzHfSpG39vQn0',
      libraries: ['places']
    }),
    CommonModule,
    WorkExperianceRoutingModule
  ],
  declarations: [WorkExperianceComponent]
})

export class WorkExperianceModule { }
