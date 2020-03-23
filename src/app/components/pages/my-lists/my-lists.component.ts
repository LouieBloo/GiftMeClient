import { Component, OnInit } from '@angular/core';
import { WishList } from '../../../models/wish-list';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';
import { SearchParameter } from 'src/app/models/auth';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.css']
})
export class MyListsComponent implements OnInit {

  allLists: WishList[] = [];

  editable: boolean = true;
  userName:string = "Loading...";

  constructor(public auth: AuthService, public eventService: EventService, private wishListService: WishListService,private route: ActivatedRoute,private userService:UserService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params.owner){
        this.getLists(params.owner)
        this.userService.get(params.owner).subscribe(user=>{
          this.userName = user.name;
        },error=>{
          console.error("Error getting user: ",error);
          this.userName = "Failed to Load"
        })
      }
      else{
        this.getLists()
      }
    });
  }

  getLists(ownerId:string = null) {
    if(ownerId == this.auth.getUserID() || !ownerId){
      this.editable = true;
      ownerId = this.auth.getUserID();
    }else{
      this.editable = false;
    }
    console.log(this.editable)
    let params: SearchParameter = { sort: { dateCreated: -1 }, owner: ownerId };
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
