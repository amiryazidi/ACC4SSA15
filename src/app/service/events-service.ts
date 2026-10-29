import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventM } from '../models/event-m';

@Injectable({
  providedIn: 'root',
})
export class EventsService {

  //etape 1 : injecter le service HttpClient
  private http = inject(HttpClient);

  //etape  2  :  definir l'url
  private apiUrl = 'http://localhost:3000/events';

  //  etape 3 : definir les methodes pour interagir avec l'API


  getEvents(){
    return this.http.get<EventM[]>(this.apiUrl);
  }
  getEventById(id: number){
    return this.http.get<EventM>(this.apiUrl + '/' + id);
  }
  AddEvent(event: EventM){
    return this.http.post<EventM>(this.apiUrl, event);
  }
  UpdateEvent(id: number, event: EventM){
    return this.http.put<EventM>(this.apiUrl + '/' + id, event);
  }
  DeleteEvent(id: number){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
