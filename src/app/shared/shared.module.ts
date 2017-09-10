import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast/toast.service';
import { SpinnerService } from './spinner/spinner.service';
import { ValidationFormComponent } from './validation-form/validation-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidationFormComponent],
  providers: [
    ToastService,
    SpinnerService],
  bootstrap: [],
  exports: [ValidationFormComponent]
})

export class SharedModule {
  constructor() { }
}