import { Component, OnInit, ViewChild } from '@angular/core';
import { WishList } from 'src/app/models/wish-list';
import { NotifierService } from 'angular-notifier';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDate, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { environment } from '../../../../environments/environment';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list: WishList = {};
  editable: boolean = false;
  isMyList: boolean = false;
  loading: boolean = true;

  @ViewChild("titleTooltip", { static: false }) titleTooltip: NgbTooltip;

  constructor(private notifierService: NotifierService, private wishListService: WishListService, private route: ActivatedRoute, private auth: AuthService,private eventService: EventService) { }

  ngOnInit() {
    this.auth.userDetailsSubject.subscribe(user => {
      this.load();
    })

    //kinda a hack, when an item is claimed by a user the api also subscribes the user 
    this.eventService.userClaimedItem.subscribe(event=>{
      this.list.subscribers.push({userId:this.auth.getUserID()})
    })
  }

  load() {
    this.route.params.subscribe(params => {
      this.wishListService.getSingle(params['id']).subscribe(result => {
        this.parseListFromAPI(result[0]);
        this.showTooltip();
        this.loading = false;
      }, error => {
        this.loading = false;
      })
    });
  }

  parseListFromAPI = (result)=>{
    this.list = result;

    if (this.list.finishDate) {
      let parsed = new Date(this.list.finishDate);
      this.list.datePickerDate = new NgbDate(parsed.getFullYear(), parsed.getMonth() + 1, parsed.getDate());
    }
    this.isMyList = this.list.owner && (this.list.owner._id == this.auth.getUserID());
    //dont set editable to isMyList as we want them to be different references
    this.editable = this.list.owner && (this.list.owner._id == this.auth.getUserID());
  }

  nameEdited = (name: string) => {
    if (name == this.list.name) { return; }
    this.list.name = name;
    this.flushEditsToServer();
  }

  addressEdited = (address: Date) => {
    if (address == this.list.address) { return; }
    this.list.address = address;
    this.flushEditsToServer();
  }

  finishDateChanged() {
    this.list.finishDate = new Date(this.list.datePickerDate.year, this.list.datePickerDate.month - 1, this.list.datePickerDate.day, 0, 0, 0, 0);
    this.flushEditsToServer();
  }

  flushEditsToServer() {
    this.wishListService.edit(this.list).subscribe(result => {
      this.notifierService.notify("success", "List Updated");
    }, error => {
      let message: string = "Failed to save: ";
      if (error.error.error.address) {
        message += error.error.error.address.msg;
      } else if (error.error.error.name) {
        message += error.error.error.name.msg;
      }
      this.notifierService.notify("error", message);
    })
  }

  toggleEditable() {
    if (this.editable) {
      this.notifierService.notify("success", "List Saved!");
    }
    this.editable = !this.editable;
  }

  showTooltip = () => {
    if (this.editable && this.list && !this.list.name) {
      setTimeout(() => {
        this.titleTooltip.open();
      }, 1000)
    }
  }

  subscribeClicked = ()=>{
    if(this.isSubscribed()){
      this.unSubscribe();
    }else{
      this.subscribe();
    }
  }

  subscribe = () => {
    this.wishListService.addSubscriber(this.list).subscribe(result => {
      this.list.subscribers = result.subscribers;
      this.notifierService.notify("success", "You are subscribed!");
    }, error => {
      console.error(error);
      this.notifierService.notify("error", "Oops");
    })
  }

  unSubscribe = () => {
    this.wishListService.deleteSubscriber(this.list).subscribe(result => {
      this.list.subscribers = result.subscribers;
      this.notifierService.notify("success", "Un-Subscribed Succesfully");
    }, error => {
      console.error(error);
      this.notifierService.notify("error", "Oops");
    })
  }

  getSubscribedString = () => {
    if (this.isSubscribed()) {
      return "Un-Subscribe"
    }
    return "Subscribe";
  }

  isSubscribed = ()=>{
    return this.list && this.list.subscribers && this.list.subscribers.length > 0 && this.list.subscribers.filter(sub => sub.userId == this.auth.getUserID()).length > 0;
  }

  copyMessage(val: string) {
    val = environment.appUrl + "/wishlists/" + val;
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
