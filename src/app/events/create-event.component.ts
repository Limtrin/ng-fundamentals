import { EventService } from './shared/event.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input {backgroind-color: #E3C3C5;}
    .error {color: #999;}
  `]
})
export class CreateEventComponent {
  isDirty: boolean = true
  newEvent

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}