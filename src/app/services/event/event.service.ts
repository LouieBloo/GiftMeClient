import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginModalEvent } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  public loginModalEvent: Subject<LoginModalEvent> = new Subject();

  constructor() { }
}
