import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { WishListItem } from 'src/app/models/wish-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListItemService } from 'src/app/services/wish-list-item/wish-list-item.service';

@Component({
  selector: 'app-claim-modal',
  templateUrl: './claim-modal.component.html',
  styleUrls: ['./claim-modal.component.css']
})
export class ClaimModalComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;
  @Input('item') item:WishListItem;
  //@Input('finishCallback') finishCallback:any;

  constructor(private modalService: NgbModal,private wishListItemService:WishListItemService) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

  claim(){
    this.wishListItemService.claim(this.item).subscribe(result=>{
      console.log(result);
    },error=>{
      console.log("Error: ",error);
    })
  }

  finishEditing(){
    //this.finishCallback();
    this.modalService.dismissAll();
  }

}
