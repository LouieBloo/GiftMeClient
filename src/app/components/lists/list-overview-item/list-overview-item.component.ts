import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-list-overview-item',
  templateUrl: './list-overview-item.component.html',
  styleUrls: ['./list-overview-item.component.css']
})
export class ListOverviewItemComponent implements OnInit {

  @Input() list:string;
  @Input() test:string;

  constructor() { }

  ngOnInit() {
  }

}
