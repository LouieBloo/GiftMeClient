import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.css']
})
export class LoginSignupModalComponent implements OnInit {
  @ViewChild('content',null) input: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

}
