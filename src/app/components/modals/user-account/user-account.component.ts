import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;

  constructor(private modalService: NgbModal,public auth:AuthService) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

  logout(){
    this.auth.logout();
    this.modalService.dismissAll();
  }
}
