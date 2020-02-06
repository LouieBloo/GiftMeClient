import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  public loginModalEvent: Subject<boolean> = new Subject();

  constructor() { }
}
