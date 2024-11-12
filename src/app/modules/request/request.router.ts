import { Routes } from '@angular/router';
import { QueryComponent } from './partials/query/query.component';
import { ParameterComponent } from './partials/parameter/parameter.component';

export const routesRequest: Routes = [
    {
        path: '',
        component: QueryComponent,
    },
    {
        path: 'crear-request',
        component: QueryComponent,
    },
    {
        path: 'crear-query',
        component: ParameterComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
]