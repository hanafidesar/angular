import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './main/component/auth/login/login.component';
const routes: Routes = [
    { path: '', loadChildren: 'app/main/main.module#MainModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
