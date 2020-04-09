import { Component, OnInit } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';
import { NotifierService } from 'angular-notifier';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list:WishList = {};
  editable:boolean = false;
  loading:boolean = true;

  constructor(private notifierService: NotifierService,private wishListService:WishListService,private route: ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
    this.auth.userDetailsSubject.subscribe(user=>{
      console.log("POPPED")
      this.load();
    })
  }

  load(){
    this.route.params.subscribe(params => {
      this.wishListService.getSingle(params['id']).subscribe(result=>{
        this.list = result[0];

        if(this.list.finishDate){
          let parsed = new Date(this.list.finishDate);
          this.list.datePickerDate = new NgbDate(parsed.getFullYear(),parsed.getMonth()+1,parsed.getDate());
        }
        this.editable = this.list.owner && this.list.owner._id == this.auth.getUserID() ? true : false;
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

  finishDateChanged(){
    this.list.finishDate = new Date(this.list.datePickerDate.year,this.list.datePickerDate.month-1,this.list.datePickerDate.day,0,0,0,0);
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

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.notifierService.notify("success", "Share Link Copied To Clipboard");
  }

}
