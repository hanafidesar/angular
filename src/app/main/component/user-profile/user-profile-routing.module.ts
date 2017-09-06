import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { UserProfileMainComponent } from './user-profile-main/user-profile-main.component';

const routes: Routes = [
    {
        path: 'user-profile-main',        
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
            } 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserProfileRoutingModule { }
