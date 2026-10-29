import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventM } from '../../models/event-m';
import { EventsService } from '../../service/events-service';

@Component({
  selector: 'app-detail-event',
  imports: [],
  templateUrl: './detail-event.html',
  styleUrl: './detail-event.css',
})
export class DetailEvent {


  event = signal<EventM | null>(null)

  //1- injecter le service ActivatedRoute pour accéder aux paramètres de l'URL
  private act = inject(ActivatedRoute);
  private eventService = inject(EventsService);
  //2- recuperer l'id de l'événement à partir de l'URL
  id=this.act.snapshot.params['id']


  ngOnInit(){
    this.eventService.getEventById(this.id).subscribe(
    (event) => {
      this.event.set(event);
      console.log(this.event()),
      console.log(this.id)
    }
  )

  }

  //3- recuperer l'événement correspondant à l'id
 // event=this.Events().find(e=>e.id==Number(this.id));

}
