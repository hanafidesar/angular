import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  CommonModule,
  DashboardRoutingModule
  ],
  declarations: [DashboardMainComponent]
})
export class DashboardModule { }
