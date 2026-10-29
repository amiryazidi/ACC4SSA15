import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventsService } from '../../service/events-service';
import { EventM } from '../../models/event-m';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event-add',
  imports: [ReactiveFormsModule],
  templateUrl: './event-add.html',
  styleUrl: './event-add.css',
})
export class EventAdd  {
  private formBuilder = inject(FormBuilder);
 private eventService = inject(EventsService);
 private router = inject(Router);
 private rt = inject(ActivatedRoute);
  id!: number;

   eventFormB = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    location: ['', Validators.required],
    date: ['', Validators.required],
    price: [null as number | null, [Validators.required, Validators.min(0)]],
    nbPlaces: [null as number | null, [Validators.required, Validators.min(1)]],
  });

  get name() {
    return this.eventFormB.get('name');
  }


  ngOnInit() {

    this.id = this.rt.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe({
      next: (data) => {
        this.eventFormB.patchValue(data)
      }
    })


  }



  save() {

      if (this.id){
        this.eventService.UpdateEvent(this.id, this.eventFormB.value as EventM).subscribe(
          () => {
            this.router.navigate(['/events']);
          }
        );
        return;
      }else {
this.eventService.AddEvent(this.eventFormB.value as EventM).subscribe(
       () => {
         this.router.navigate(['/events']);
       }
     )

      }



  }

}
