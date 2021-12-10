import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserDetails } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginSignupModalComponent } from '../../modals/login-signup-modal/login-signup-modal.component';
import { EventService } from 'src/app/services/event/event.service';
import { setDefaultService } from 'selenium-webdriver/chrome';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeModalComponent } from '../../modals/welcome-modal/welcome-modal.component';
import { Router } from '@angular/router';

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
  @ViewChild('welcomeModalComponent',{static:true}) welcomeModalComponent:WelcomeModalComponent;

  @Input('sidenav') sidenav:any;

  constructor(public auth:AuthService,public eventService:EventService,private modalService: NgbModal,public router: Router) { }

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

    this.eventService.welcomeModalEvent.subscribe(event=>{
      this.welcomeModalComponent.open();
    })
  }

  click(showRegister:boolean){
    this.modalService.dismissAll();
    if(this.auth.isLoggedIn()){
      this.sidenav.toggle()
    }else{
      this.appLoginComponent.open(showRegister ? 'registerTab' : 'loginTab');
    }
  }

}
