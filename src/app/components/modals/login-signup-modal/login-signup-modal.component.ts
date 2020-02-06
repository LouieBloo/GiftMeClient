import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.css']
})
export class LoginSignupModalComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;

  activeTabId:string = "registerTab";

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(activeTabId:string){
    this.activeTabId = activeTabId;
    this.modalService.open(this.input, { centered: true });
  }

  onTabChange($event: NgbTabChangeEvent) {
    this.activeTabId = $event.nextId;
    if(this.activeTabId == "loginTab"){

    }
  }
}
