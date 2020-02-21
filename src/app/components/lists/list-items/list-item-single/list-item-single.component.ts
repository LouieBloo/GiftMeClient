import { Component, OnInit, Input } from '@angular/core';
import { WishListItem } from 'src/app/models/wish-list';
import { WishListItemService } from 'src/app/services/wish-list-item/wish-list-item.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-list-item-single',
  templateUrl: './list-item-single.component.html',
  styleUrls: ['./list-item-single.component.css']
})
export class ListItemSingleComponent implements OnInit {

  @Input('item') item:WishListItem
  @Input('editable') editable:boolean;

  constructor(private wishListItemService:WishListItemService,private notifierService: NotifierService) { }

  ngOnInit() {
  }

  nameEdited = (name:string)=>{
    if(name == this.item.name){return;}
    this.item.name = name;
    if(this.item._id){
      this.updateItem();  
    }else{
      this.createItem();
    }
  }

  descriptionEdited = (description:string)=>{
    if(description == this.item.description){return;}
    if(!description){
      delete(this.item.description)
    }else{
      this.item.description = description;
    }
    this.updateItem();  
  }

  createItem(){
    this.wishListItemService.create(this.item).subscribe(result=>{
      if(result && result._id){
        this.item = result;
        this.notifierService.notify("success", "Item Created");
      }
    },error=>{
      console.log("Error creating item: ",error)
    })
  }

  updateItem(){
    if(!this.item._id){return;}

    this.wishListItemService.edit(this.item).subscribe(result=>{
      if(result && result._id){
        this.item = result;
        this.notifierService.notify("success", "Item Updated");
      }
    },error=>{
      console.log("Error creating item: ",error)
    })
  }

}
