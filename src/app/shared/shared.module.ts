import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFormComponent } from './validation-form/validation-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidationFormComponent],
  providers: [],
  bootstrap: [],
  exports: [ValidationFormComponent]
})

export class SharedModule {
  constructor() { }
}