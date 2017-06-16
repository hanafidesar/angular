import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './main/create-form/create-form.component';
import { EditFormComponent } from './main/edit-form/edit-form.component';
import { EditDataFormComponent } from './main/edit-data-form/edit-data-form.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'first' },
    { path: 'create', component: CreateFormComponent },
    { path: 'edit', component: EditFormComponent },
    { path: 'editData/:id/:name', component: EditDataFormComponent },
    { path: 'lazy', loadChildren: 'app/main/lazy/lazy.module#LazyModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [CreateFormComponent, EditFormComponent, EditDataFormComponent]
