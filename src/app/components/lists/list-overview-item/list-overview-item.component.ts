import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';
import { Router } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-overview-item',
  templateUrl: './list-overview-item.component.html',
  styleUrls: ['./list-overview-item.component.css']
})
export class ListOverviewItemComponent implements OnInit {

  @Input() list:WishList;
  @Input() editable:boolean;
  @Input() deleteCallback: any;

  @ViewChild("editButton",{static:false}) editButton: NgbTooltip;

  canShowToolTip: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.calculateShowTooltip()){
      setTimeout(this.openTooltip,100)
    }
  }

  delete = ()=>{
    this.deleteCallback(this.list);
  }

  calculateShowTooltip = ()=>{
    this.canShowToolTip = this.editable && this.list && this.list.showToolTip;
    return this.canShowToolTip;
  }

  openTooltip = ()=>{
    console.log(this.editButton)
    this.editButton.open();
  }
  
}
