import { Component, OnInit } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement/engagement.service';
import { WishList } from 'src/app/models/wish-list';

@Component({
  selector: 'app-recent-lists',
  templateUrl: './recent-lists.component.html',
  styleUrls: ['./recent-lists.component.css']
})
export class RecentListsComponent implements OnInit {

  recentLists:WishList[];

  constructor(private engagementService:EngagementService) { }

  ngOnInit() {
    this.engagementService.getLists().subscribe(result=>{
      if(result){
        this.recentLists = result;
      }
    },error=>{
      console.error("Error fetching recent lists: ",error);
    })
  }

}
