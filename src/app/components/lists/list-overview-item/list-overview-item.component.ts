import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';
import { Router } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-list-overview-item',
  templateUrl: './list-overview-item.component.html',
  styleUrls: ['./list-overview-item.component.css']
})
export class ListOverviewItemComponent implements OnInit {

  @Input() list:WishList;
  @Input() editable:boolean;
  @Input() deleteCallback: any;

  @ViewChild("editButton") editButton: NgbTooltip;

  canShowToolTip: boolean = false;

  constructor(private notifierService: NotifierService) { }

  ngOnInit() {
    if(this.calculateShowTooltip()){
      setTimeout(this.openTooltip,100)
    }
  }

  delete = ()=>{
    this.deleteCallback(this.list);
  }

  copyMessage(val: string) {
    val = environment.appUrl + "/wishlists/" + val;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.notifierService.notify("success", "Share Link Copied To Clipboard");
  }

  calculateShowTooltip = ()=>{
    this.canShowToolTip = this.editable && this.list && this.list.showToolTip;
    return this.canShowToolTip;
  }

  openTooltip = ()=>{
    this.editButton.open();
  }
  
}
