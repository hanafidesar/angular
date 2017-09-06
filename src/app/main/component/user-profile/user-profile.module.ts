import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileMainComponent } from './user-profile-main/user-profile-main.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ],
  declarations: [UserProfileMainComponent]
})
export class UserProfileModule { }
