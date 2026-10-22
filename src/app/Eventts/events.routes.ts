import { Routes } from "@angular/router";




export const EventRoute: Routes = [

 {path : '' , loadComponent: () =>
    import('./events/events').then(m => m.Events)
  },
  {path : 'detail/:id' , loadComponent: () =>
    import('./detail-event/detail-event').then(m => m.DetailEvent)
  },
]
