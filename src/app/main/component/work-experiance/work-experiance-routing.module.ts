import { WorkExperianceComponent } from './work-experiance/work-experiance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'work-experiance',
        data: {
            title: 'WORK EXPERIANCE'
        },
        children: [
            {
                path: '',
                component: WorkExperianceComponent,
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

export class WorkExperianceRoutingModule { }
