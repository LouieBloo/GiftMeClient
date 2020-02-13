import { Component, OnInit } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list:WishList = {};
  editable:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  finishDateChanged(){
    console.log("change: " , this.list);
  }

}
