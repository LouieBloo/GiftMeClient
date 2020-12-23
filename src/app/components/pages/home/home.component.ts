import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FindModalComponent } from '../../modals/find-modal/find-modal.component';
import { EventService } from 'src/app/services/event/event.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('findModal',null) findModal:FindModalComponent;

  constructor(private eventService:EventService,private auth:AuthService) { }

  ngOnInit() {
  }

  findButtonClicked(){
    this.findModal.open();
  }

  registerButtonClicked(){
    this.eventService.loginModalEvent.next({showRegister:true,callback:null});
  }
}
