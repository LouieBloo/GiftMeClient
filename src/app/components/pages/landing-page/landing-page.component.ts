import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private eventService:EventService,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Gimmie Gifts");
  }

  register(){
    this.eventService.loginModalEvent.next({showRegister:true,callback:null});
  }
}
