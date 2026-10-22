import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventM } from '../../models/event-m';

@Component({
  selector: 'app-detail-event',
  imports: [],
  templateUrl: './detail-event.html',
  styleUrl: './detail-event.css',
})
export class DetailEvent {


  Events = signal<EventM[]>([
    {id:1,title:'workshop Angular',description:'workshop data binding',location:'tunis',date:'2027-09-30',price:50,nbPLaces:5},
    {id:2,title:'Hackathon Esprit',description:'workshop data binding',location:'tunis',date:'2027-09-30',price:50,nbPLaces:5},
  ])

  //1- injecter le service ActivatedRoute pour accéder aux paramètres de l'URL
  private act = inject(ActivatedRoute);
  //2- recuperer l'id de l'événement à partir de l'URL
  id=this.act.snapshot.params['id']
  //3- recuperer l'événement correspondant à l'id
  event=this.Events().find(e=>e.id==Number(this.id));

}
