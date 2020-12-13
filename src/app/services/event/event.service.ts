import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginModalEvent,ListUpdatedEvent } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  public loginModalEvent: Subject<LoginModalEvent> = new Subject();
  public userClaimedItem: Subject<ListUpdatedEvent> = new Subject();
  public welcomeModalEvent: Subject<any> = new Subject();

  constructor() { }
}
