import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/auth';
import { FindModalComponent } from '../find-modal/find-modal.component';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;
  @ViewChild('findModal',null) findModal:FindModalComponent;
  activeUser:UserDetails;

  constructor(private modalService: NgbModal,public auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  open(){
    this.activeUser = this.auth.getUserDetails();
    this.modalService.open(this.input, { centered: true });
  }

  logout(){
    this.auth.logout();
    this.modalService.dismissAll();
    this.router.navigateByUrl('/');
  }

  goHomeClicked = ()=>{
    this.router.navigateByUrl('/');
    this.modalService.dismissAll();
  }

  findThingsClicked = ()=>{
    this.modalService.dismissAll();
    this.findModal.open();
  }

  recentListButtonClicked(){
    this.router.navigateByUrl('/engagement/wishlists');
    this.modalService.dismissAll();
  }

  myListButtonClicked(){
    this.router.navigateByUrl('/wishlists');
    this.modalService.dismissAll();
  }
}
