import { Component, OnInit, Input } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';

@Component({
  selector: 'app-recent-list-item',
  templateUrl: './recent-list-item.component.html',
  styleUrls: ['./recent-list-item.component.css']
})
export class RecentListItemComponent implements OnInit {

  @Input() list:WishList;

  constructor() { }

  ngOnInit() {
  }

}
