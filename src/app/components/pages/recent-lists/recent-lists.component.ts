import { Component, OnInit } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement/engagement.service';
import { WishList } from 'src/app/models/wish-list';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recent-lists',
  templateUrl: './recent-lists.component.html',
  styleUrls: ['./recent-lists.component.css']
})
export class RecentListsComponent implements OnInit {

  recentLists:WishList[];
  loading:boolean = true;

  constructor(private engagementService:EngagementService,private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Recent Lists");

    this.engagementService.getLists().subscribe(result=>{
      if(result){
        this.recentLists = result;
      }
      this.loading = false;
    },error=>{
      console.error("Error fetching recent lists: ",error);
      this.loading = false;
    })
  }

}
