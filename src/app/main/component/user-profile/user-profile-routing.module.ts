import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileMainComponent } from './user-profile-main/user-profile-main.component';

const routes: Routes = [
    {
        path: 'profile',
        data: {
            title: 'User Profile'
        },
        children: [
            {
                path: '',
                component: UserProfileMainComponent,
                data: {
                    title: 'User Profile'
                }
            },
            {
                path: 'edit',
                component: UserProfileEditComponent,
                data: {
                    title: 'Profile Edit',
                    editing: true
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserProfileRoutingModule { }
