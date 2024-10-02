import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'speakers', loadComponent: () => import('./components/speakers/speakers.component').then(m => m.SpeakersComponent) },
    { path: 'agenda', loadComponent: () => import('./components/agenda/agenda.component').then(m => m.AgendaComponent) },
    { path: 'venue', loadComponent: () => import('./components/venue/venue.component').then(m => m.VenueComponent) },
    { path: 'tickets', loadComponent: () => import('./components/tickets/tickets.component').then(m => m.TicketsComponent) },
    { path: 'workshops', loadComponent: () => import('./components/workshops/workshops.component').then(m => m.WorkshopsComponent) },
    { path: 'sponsors', loadComponent: () => import('./components/sponsors/sponsors.component').then(m => m.SponsorsComponent) },
    { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
    { path: 'coc', loadComponent: () => import('./components/coc/coc.component').then(m => m.CocComponent) },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
