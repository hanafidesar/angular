import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, SidebarComponent],
  exports: [
    HeaderComponent, LayoutComponent
  ]
})
export class LayoutModule { }
