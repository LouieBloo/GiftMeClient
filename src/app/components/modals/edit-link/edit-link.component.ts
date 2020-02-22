import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListItem } from 'src/app/models/wish-list';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.css']
})
export class EditLinkComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;
  @Input('item') item:WishListItem;
  @Input('finishCallback') finishCallback:any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

  finishEditing(){
    this.finishCallback();
    this.modalService.dismissAll();
  }

}
