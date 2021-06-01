import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EducationComponent } from './education/education.component';
import { EducationRoutingModule } from './education-routing.module';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmBsbya9UgiHjLlbDB9cUzHfSpG39vQn0',
      libraries: ['places']
    }),
    CommonModule,
    EducationRoutingModule
  ],
  declarations: [EducationComponent]
})

export class EducationModule { }
