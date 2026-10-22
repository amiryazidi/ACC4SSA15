import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventM } from '../../models/event-m';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  Events = signal<EventM[]>([
    {id:1,title:'workshop Angular',description:'workshop data binding',location:'tunis',date:'2027-09-30',price:50,nbPLaces:5},
    {id:2,title:'Hackathon Esprit',description:'workshop data binding',location:'tunis',date:'2027-09-30',price:50,nbPLaces:5},

  ])
}
