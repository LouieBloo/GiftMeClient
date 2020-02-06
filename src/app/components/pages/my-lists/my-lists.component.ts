import { Component, OnInit } from '@angular/core';
import {List} from '../../../models/list';
import { HttpService } from 'src/app/services/http-service/http.service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.css']
})
export class MyListsComponent implements OnInit {

  allLists : List[] = [{name:"list test this is real"}];

  constructor(public auth:HttpService,public eventService:EventService) {
  }

  ngOnInit() {
  }

}
