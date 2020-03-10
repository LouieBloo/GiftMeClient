import { Component, OnInit } from '@angular/core';
import { WishList } from '../../../models/wish-list';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';
import { SearchParameter } from 'src/app/models/auth';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.css']
})
export class MyListsComponent implements OnInit {

  allLists: WishList[] = [];

  viewingOwnLists: boolean = true;

  constructor(public auth: AuthService, public eventService: EventService, private wishListService: WishListService) {
  }

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    let params: SearchParameter = { sort: { dateCreated: -1 }, owner: this.auth.getUserID() };

    this.wishListService.get(params).subscribe(result => {
      if (result && result.length > 0) {
        this.allLists = result;
      } else {
        this.allLists = [];
      }
    }, error => {
      console.error(error);
    })
  }

  createList() {
    // this.allLists.unshift({});
    this.wishListService.create({}).subscribe(result=>{
      this.getLists();
    },error=>{
      console.log(error);
    })
  }

  listDeleted = (list: WishList) => {
    if (list._id) {
      this.wishListService.delete(list._id).subscribe(result => {
        this.getLists();
      }, error => {
        console.error(error);
      });
    } else {
      for(let i = 0; i < this.allLists.length;i++){
        if(this.allLists[i] == list){
          this.allLists.splice(i,1);
        }
      }
    }

  }

}
