import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-overview-item',
  templateUrl: './list-overview-item.component.html',
  styleUrls: ['./list-overview-item.component.css']
})
export class ListOverviewItemComponent implements OnInit {

  @Input() list:WishList;
  @Input() editable:boolean;
  @Input() deleteCallback: any;


  constructor(private router: Router) { }

  ngOnInit() {

  }

  delete = ()=>{
    this.deleteCallback(this.list);
  }

}
