import { EducationComponent } from './education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'education',
        data: {
            title: 'Education'
        },
        children: [
            {
                path: '',
                component: EducationComponent,
                data: {
                    title: 'Company'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EducationRoutingModule { }
