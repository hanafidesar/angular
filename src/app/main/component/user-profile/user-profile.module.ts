import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { SharedModule} from '../../../shared/shared.module';
import { UserProfileMainComponent } from './user-profile-main/user-profile-main.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TooltipModule,
    UserProfileRoutingModule
  ],
  declarations: [UserProfileMainComponent, UserProfileEditComponent]
})

export class UserProfileModule { }
