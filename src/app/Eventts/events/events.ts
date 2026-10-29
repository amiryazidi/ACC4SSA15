import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventM } from '../../models/event-m';
import { EventsService } from '../../service/events-service';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  Events = signal<EventM[]>([])


  // 1  injecter le service eventService
   private eventService = inject(EventsService)

   ngOnInit(){
    this.eventService.getEvents().subscribe({
      next: (events) => this.Events.set(events),
      error: (err) => console.error(err),
      complete: () => console.log('Events fetching completed')
    })
   }

   deleteEvent(id: number) {
    this.eventService.DeleteEvent(id).subscribe({
      next: () => {
        this.Events.set(this.Events().filter(e => e.id !== id));
      },
      error: (err) => console.error(err),
      complete: () => console.log('Event deletion completed')
    });
   }
}
