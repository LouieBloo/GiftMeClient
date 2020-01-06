import { Component, OnInit } from '@angular/core';
import {List} from '../../../models/list';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.css']
})
export class MyListsComponent implements OnInit {

  allLists : List[] = [{name:"list test this is real"}];

  constructor() {
  }

  ngOnInit() {
  }

}
