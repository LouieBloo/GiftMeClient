import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-modal',
  templateUrl: './find-modal.component.html',
  styleUrls: ['./find-modal.component.css']
})
export class FindModalComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;
  listIdInputValue:any;

  constructor(private modalService: NgbModal,private router:Router) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

  searchForList(){
    this.router.navigateByUrl('/wishlists/' + this.listIdInputValue);
    this.modalService.dismissAll();
  }

}
