import { Component, OnInit, Input } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';

@Component({
  selector: 'app-lists-scroll-container',
  templateUrl: './lists-scroll-container.component.html',
  styleUrls: ['./lists-scroll-container.component.css']
})
export class ListsScrollContainerComponent implements OnInit {

  @Input('list') list : WishList = null;

  constructor() { }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems(){
    console.log(this.list)
  }
}
