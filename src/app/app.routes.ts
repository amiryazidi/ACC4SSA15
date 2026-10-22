import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Events } from './Eventts/events/events';
import { NotFound } from './not-found/not-found';
import { DetailEvent } from './Eventts/detail-event/detail-event';

export const routes: Routes = [

  // route par defaut
  { path : '' , redirectTo : 'home' , pathMatch : 'full' },
  { path : 'home' , component : Home },

  // route pour les événements avec lazy loading
  {path: 'events', loadChildren: () =>
    import('./Eventts/events.routes')
    .then(m => m.EventRoute)},


  // route pour les pages non trouvées
  { path : '**' , component: NotFound}
];
