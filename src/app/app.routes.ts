import { Routes } from '@angular/router';
import { BusinessComponent } from './modules/business/business.component';
import { AnalizerConversationComponent } from './modules/analizer-conversation/analizer-conversation.component';
import { RequestComponent } from './modules/request/request.component';
import { QueryComponent } from './modules/request/partials/query/query.component';
import { ParameterComponent } from './modules/request/partials/parameter/parameter.component';
import { AnalyzeFeedbackComponent } from './modules/analyze-feedback/analyze-feedback.component';

export const routes: Routes = [
    {
        path: 'home',
        component: BusinessComponent,
        children:[
            {
                path: '',
                component: AnalizerConversationComponent,
            },
            {
                path: 'feedback',
                component: AnalyzeFeedbackComponent,
            },
            {
                path: 'request',
                component: RequestComponent,
                children: [
                    {
                        path: '',
                        component: QueryComponent,
                    },
                    {
                        path: 'crear-request',
                        component: QueryComponent,
                    },
                    {
                        path: 'crear-parametro',
                        component: ParameterComponent,
                    },
                    {
                        path: '**',
                        redirectTo: '',
                    },
                ],
            },
            {
                path: '**',
                redirectTo: '',
              },
        ]
      },
      {
        path: '**',
        redirectTo: 'home',
      },
];
