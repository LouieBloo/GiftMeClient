import { Component, OnInit, Input } from '@angular/core';
import { WishList, WishListItem } from 'src/app/models/wish-list';
import { WishListItemService } from 'src/app/services/wish-list-item/wish-list-item.service';

@Component({
  selector: 'app-list-item-container',
  templateUrl: './list-item-container.component.html',
  styleUrls: ['./list-item-container.component.css']
})
export class ListItemContainerComponent implements OnInit {

  @Input('list') list : WishList = null;
  @Input('editable') editable:boolean;
  constructor() { }

  ngOnInit() {
  }

  createItem(){
    this.list.items.push({listId:this.list._id});
  }

  itemDeleted = (item:WishListItem,index:any)=>{
    this.list.items.splice(index,1);
  }

}
