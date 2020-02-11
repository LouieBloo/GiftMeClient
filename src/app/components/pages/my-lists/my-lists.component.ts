import { Component, OnInit } from '@angular/core';
import { WishList } from '../../../models/wish-list';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.css']
})
export class MyListsComponent implements OnInit {

  allLists: WishList[] = [];

  viewingOwnLists:boolean = true;

  constructor(public auth: AuthService, public eventService: EventService,private wishListService:WishListService) {
  }

  ngOnInit() {
    this.getLists();
  }

  getLists(){
    let params = null;
    if(!this.viewingOwnLists){
      params = "whatever";
    }
    this.wishListService.get(params).subscribe(result=>{
      if(result && result.length > 0){
        this.allLists = result;
      }else{
        this.allLists = [];
      }
    },error=>{
      console.error(error);
    })
  }

  createList(){
    this.wishListService.create({name:"Test 123123"}).subscribe(result=>{
      this.getLists();
    },error=>{
      console.log(error);
    })
  }

  listDeleted = (list:WishList)=>{
    this.wishListService.delete(list._id).subscribe(result=>{
      this.getLists();
    },error=>{
      console.error(error);
    });
  }

}
