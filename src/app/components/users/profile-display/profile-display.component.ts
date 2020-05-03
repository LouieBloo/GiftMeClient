import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginSignupModalComponent } from '../../modals/login-signup-modal/login-signup-modal.component';
import { EventService } from 'src/app/services/event/event.service';
import { UserAccountComponent } from '../../modals/user-account/user-account.component';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {

  activeUser:UserDetails;

  firstTimeLoad:boolean = true;
  firstTimeLoadStorageName:string = "hasViewedApp"

  userLoggedInOrRegisteredCallback:any;

  @ViewChild('appLoginComponent',{static:true}) appLoginComponent:LoginSignupModalComponent;
  @ViewChild('appUserAccount',{static:true}) userAccountComponent:UserAccountComponent;

  constructor(public auth:AuthService,public eventService:EventService) { }

  ngOnInit() {
    //so we always know the state of the user
    this.auth.userDetailsSubject.subscribe(user=>{
      this.activeUser = user;

      //So we can do actions after we log in or register automatically, such as claiming an item
      //this should probably be in a service or something 
      if(this.userLoggedInOrRegisteredCallback){
        this.userLoggedInOrRegisteredCallback();
        this.userLoggedInOrRegisteredCallback = null;
      }      
    })

    //first time using app should show register instead of login
    if(localStorage.getItem(this.firstTimeLoadStorageName)){
      this.firstTimeLoad = false;
    }else{
      localStorage.setItem(this.firstTimeLoadStorageName,'true');
    }

    //so other components can open the login or register modal
    this.eventService.loginModalEvent.subscribe(event=>{
      this.userLoggedInOrRegisteredCallback = event.callback;
      this.click(event.showRegister);
    })
  }

  click(showRegister:boolean){
    if(this.auth.isLoggedIn()){
      this.userAccountComponent.open();
    }else{
      this.appLoginComponent.open(showRegister ? 'registerTab' : 'loginTab');
    }
  }

}
