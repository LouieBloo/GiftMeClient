import { Component, OnInit } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';
import { NotifierService } from 'angular-notifier';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list:WishList = {};
  editable:boolean = true;
  loading:boolean = true;

  constructor(private notifierService: NotifierService,private wishListService:WishListService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wishListService.getSingle(params['id']).subscribe(result=>{
        this.list = result[0];

        if(this.list.finishDate){
          let parsed = new Date(this.list.finishDate);
          this.list.datePickerDate = new NgbDate(parsed.getFullYear(),parsed.getMonth()+1,parsed.getDate());
        }

        this.loading = false;
      },error=>{
        this.loading = false;
      })
   });
    
  }

  nameEdited = (name:string)=>{
    if(name == this.list.name){return;}
    this.list.name = name;
    this.flushEditsToServer();
  }

  addressEdited =  (address:Date)=>{
    if(address == this.list.address){return;}
    this.list.address = address;
    this.flushEditsToServer();
  }

  flushEditsToServer(){
    this.wishListService.edit(this.list).subscribe(result=>{
      this.notifierService.notify("success", "List Updated");
    },error=>{
      let message:string = "Failed to save: ";
      if(error.error.error.address){
        message += error.error.error.address.msg;
      }else if(error.error.error.name){
        message += error.error.error.name.msg;
      }
      this.notifierService.notify("error", message);
    })
  }

  finishDateChanged(){
    this.list.finishDate = new Date(this.list.datePickerDate.year,this.list.datePickerDate.month-1,this.list.datePickerDate.day,0,0,0,0);
    this.flushEditsToServer();
  }

}
