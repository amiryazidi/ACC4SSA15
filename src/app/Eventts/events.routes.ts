import { Routes } from "@angular/router";




export const EventRoute: Routes = [

 {path : '' , loadComponent: () =>
    import('./events/events').then(m => m.Events)
  },
  {path : 'detail/:id' , loadComponent: () =>
    import('./detail-event/detail-event').then(m => m.DetailEvent)
  },
   {
    path : 'add',
    loadComponent: () =>
      import('./event-add/event-add')
        .then(m => m.EventAdd)
  },

  {
    path : 'update/:id',
    loadComponent: () =>
    import('./event-add/event-add')
        .then(m => m.EventAdd)
  }
]
