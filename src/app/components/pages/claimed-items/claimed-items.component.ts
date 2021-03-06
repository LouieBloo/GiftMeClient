import { Component, OnInit } from '@angular/core';
import { WishListItem } from 'src/app/models/wish-list';
import { WishListItemService } from 'src/app/services/wish-list-item/wish-list-item.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-claimed-items',
  templateUrl: './claimed-items.component.html',
  styleUrls: ['./claimed-items.component.css']
})
export class ClaimedItemsComponent implements OnInit {

  claimedItems:WishListItem[];
  loading:boolean = true;

  constructor(private itemService:WishListItemService,private titleService:Title) { }

  ngOnInit() {
    this.itemService.getClaimed().subscribe(result=>{
      if(result){
        this.claimedItems = result;
      }
      this.loading = false;
    },error=>{
      console.error("Error fetching claimed Items: ",error);
      this.loading = false;
    })

    this.titleService.setTitle("Claimed Items");
  }

}
