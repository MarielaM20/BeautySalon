import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AppointmentMessageComponent } from './views/appointment-message/appointment-message.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { HaircoloringComponent } from './views/haircoloring/haircoloring.component';
import { HaircutComponent } from './views/haircut/haircut.component';
import { HairstylesComponent } from './views/hairstyles/hairstyles.component';
import { MakeupComponent } from './views/makeup/makeup.component';
import { ManicureComponent } from './views/manicure/manicure.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainComponent
    },
    {
        path: 'views/manicure',
        component: ManicureComponent,
        data: {
            title: 'Manicure Page',
            loginRequired: true
        }
    },
    {
        path: 'views/makeup',
        component: MakeupComponent,
        data: {
            title: 'Makeup Page',
            loginRequired: true
        }
    },
    {
        path: 'views/haircut',
        component: HaircutComponent,
        data: {
            title: 'Haircut Page',
            loginRequired: true
        }
    },
    {
        path: 'views/haircoloring',
        component: HaircoloringComponent,
        data: {
            title: 'Haircoloring Page',
            loginRequired: true
        }
    },
    {
        path: 'views/hairstyles',
        component: HairstylesComponent,
        data: {
            title: 'Hairstyles Page',
            loginRequired: true
        }
    },
    {
        path: 'views/portfolio',
        component: PortfolioComponent,
        data: {
            title: 'Portfolio'
        }
    },
    {
        path: 'views/contacts',
        component: ContactsComponent,
        data: {
            title: 'Contact us'
        }
    },
    {
        path: 'views/appointmentMessage',
        component: AppointmentMessageComponent,
        data: {
            title: 'Appointment made',
            loginRequired: true
        }
    },
    {
        path: 'not-found',
        component: PageNotFoundComponent,
        data: {
            title: 'Page not found'
        }
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }