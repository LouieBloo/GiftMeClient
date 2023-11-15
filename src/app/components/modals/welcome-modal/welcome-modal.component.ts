import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'welcome-modal-component',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent implements OnInit {

  @ViewChild('content') input: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(){
    setTimeout(()=>{
      this.modalService.open(this.input, { centered: true, windowClass: 'welcomeModalWindowClass' });
    }, 500)
  }

}
