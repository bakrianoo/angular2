import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CoursesComponent } from './courses.component';
import { AboutComponent } from './about.component';

const app_routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routers : ModuleWithProviders = RouterModule.forRoot(app_routes);