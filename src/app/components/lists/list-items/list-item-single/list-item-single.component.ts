import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { WishListItem, WishList } from 'src/app/models/wish-list';
import { WishListItemService } from 'src/app/services/wish-list-item/wish-list-item.service';
import { NotifierService } from 'angular-notifier';
import { EditLinkComponent } from 'src/app/components/modals/edit-link/edit-link.component';
import { EditIconComponent } from 'src/app/components/modals/edit-icon/edit-icon.component';
import { ClaimModalComponent } from 'src/app/components/modals/claim-modal/claim-modal.component';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-list-item-single',
  templateUrl: './list-item-single.component.html',
  styleUrls: ['./list-item-single.component.css']
})
export class ListItemSingleComponent implements OnInit {

  @Input() item: WishListItem;
  @Input() index: any;
  @Input('editable') editable: boolean;
  @Input('deleteCallback') deleteCallback:any;

  @Input('claimedOnly') claimedOnly: boolean;
  @Input('claimedList') claimedList: WishList;

  @ViewChild('linkModal') linkModal: EditLinkComponent;
  @ViewChild('iconModal') iconModal: EditIconComponent;
  @ViewChild('claimModal') claimModal:ClaimModalComponent;
  userId:string;

  constructor(private wishListItemService: WishListItemService, private notifierService: NotifierService,private auth:AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserDetails() ? this.auth.getUserDetails()._id : null;
  }

  nameEdited = (name: string) => {
    if (name == this.item.name) { return; }
    this.item.name = name;
    if (this.item._id) {
      this.updateItem();
    } else {
      this.createItem();
    }
  }

  descriptionEdited = (description: string) => {
    if (description == this.item.description) { return; }
    this.item.description = description;
    this.updateItem();
  }

  linkEdited = ()=> {
    this.updateItem();
  }

  iconEdited = ()=>{
    this.updateItem();
  }

  createItem() {
    this.wishListItemService.create(this.item).subscribe(result => {
      if (result && result._id) {
        this.item = result;
        this.notifierService.notify("success", "Item Created");
      }
    }, error => {
      console.log("Error creating item: ", error)
    })
  }

  updateItem() {
    if (!this.item._id) { return; }
    this.wishListItemService.edit(this.item).subscribe(result => {
      if (result && result._id) {
        this.item = result;
        this.notifierService.notify("success", "Item Updated");
      }
    }, error => {
      console.log("Error creating item: ", error)
      let message:string = "Failed to save item: ";
      if(error.error.error.link){
        message += error.error.error.link.msg;
      }else if(error.error.error.icon){
        message += error.error.error.icon.msg;
      }
      this.notifierService.notify("error", message);
    })
  }

  deleteItem(){
    if(this.item._id){
      this.wishListItemService.delete(this.item._id).subscribe(result=>{
        this.notifierService.notify("success","Item Deleted");
        this.deleteCallback(this.item,this.index);
      },error=>{
        console.error("error deleting item: ",error);
        this.notifierService.notify("error","Error deleting item: " + error.error);
      })
    }else{
      this.deleteCallback(this.item,this.index);
    }
  }

  purchaseButtonClicked(){
    if(this.isItemBought()){
      this.unPurchaseItem();
    }else{
      this.purchaseItem();
    }
  }

  purchaseItem(){
    this.wishListItemService.purchase(this.item).subscribe(result=>{
      this.item.purchased = result.purchased;
      this.notifierService.notify("success","Item Marked as Bought!");
    },error=>{
      console.log("Error: ",error);
      this.notifierService.notify("error","Error purchasing item: " + error.error);
    })
  }

  unPurchaseItem(){
    this.wishListItemService.unPurchase(this.item).subscribe(result=>{
      this.item.purchased = null;
      this.notifierService.notify("success","Item Marked as Un-Bought!");
    },error=>{
      console.log("Error: ",error);
      this.notifierService.notify("error","Error un-Purchased item: " + error.error);
    })
  }

  claimButtonClicked(){
    this.claimModal.open();
  }

  unClaimButtonClicked(){
    //this.claimModal.open();
  }

  isItemClaimed(){
    return this.item.claimedUser;
  }

  isItemClaimedByMe(){
    return this.isItemClaimed() && this.item.claimedUser._id && this.item.claimedUser._id == this.userId;
  }

  isItemBought(){
    return this.item.purchased;
  }
}
