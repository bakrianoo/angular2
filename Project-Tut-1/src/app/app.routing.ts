import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { BlogComponent }  from './blog.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'blog/:id',
        component: BlogComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);