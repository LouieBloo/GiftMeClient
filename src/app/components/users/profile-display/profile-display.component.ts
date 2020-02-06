import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from 'src/app/models/auth';
import { HttpService } from 'src/app/services/http-service/http.service';
import { LoginSignupModalComponent } from '../../modals/login-signup-modal/login-signup-modal.component';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {

  activeUser:UserDetails;

  firstTimeLoad:boolean = true;
  firstTimeLoadStorageName:string = "hasViewedApp"

  @ViewChild('appLoginComponent',{static:true}) appLoginComponent:LoginSignupModalComponent;



  constructor(private auth:HttpService,public eventService:EventService) { }

  ngOnInit() {
    this.auth.userDetailsSubject.subscribe(user=>{
      this.activeUser = user;
    })

    if(localStorage.getItem(this.firstTimeLoadStorageName)){
      this.firstTimeLoad = false;
    }else{
      localStorage.setItem(this.firstTimeLoadStorageName,'true');
    }

    this.eventService.loginModalEvent.subscribe(event=>{
      this.click(event);
    })
  }



  click(showRegister:boolean){
    this.appLoginComponent.open(showRegister ? 'registerTab' : 'loginTab');
  }
}
