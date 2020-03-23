import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { WishListItem } from 'src/app/models/wish-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListItemService } from 'src/app/services/wish-list-item/wish-list-item.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-claim-modal',
  templateUrl: './claim-modal.component.html',
  styleUrls: ['./claim-modal.component.css']
})
export class ClaimModalComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;
  @Input('item') item:WishListItem;
  //@Input('finishCallback') finishCallback:any;

  constructor(private modalService: NgbModal,private wishListItemService:WishListItemService,private notifierService: NotifierService) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

  claim(){
    this.wishListItemService.claim(this.item).subscribe(result=>{
      this.item.claimedUser = result.claimedUser;
      this.notifierService.notify("success","Item Claimed!");
      this.finishEditing();
    },error=>{
      console.log("Error: ",error);
      this.notifierService.notify("error","Error claiming item: " + error.error);
    })
  }

  unClaim(){
    this.wishListItemService.unclaim(this.item).subscribe(result=>{
      this.item.claimedUser = null;
      this.notifierService.notify("success","Item Un-Claimed!");
      this.finishEditing();
    },error=>{
      console.log("Error: ",error);
      this.notifierService.notify("error","Error un-claiming item: " + error.error);
    })
  }


  finishEditing(){
    //this.finishCallback();
    this.modalService.dismissAll();
  }

}
