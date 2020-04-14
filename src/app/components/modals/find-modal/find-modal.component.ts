import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';

@Component({
  selector: 'app-find-modal',
  templateUrl: './find-modal.component.html',
  styleUrls: ['./find-modal.component.css']
})
export class FindModalComponent implements OnInit {

  @ViewChild('content', null) input: ElementRef;
  listIdInputValue: any;
  findError: string;

  constructor(private modalService: NgbModal, private router: Router, private wishListService: WishListService) { }

  ngOnInit() {
  }

  open() {
    this.listIdInputValue = null;
    this.modalService.open(this.input, { centered: true });
  }

  

  searchForList() {
    this.findError = null;
    this.wishListService.getExists(this.listIdInputValue).subscribe(response => {
      this.router.navigateByUrl('/wishlists/' + this.listIdInputValue);
      this.modalService.dismissAll();
    }, error => {
      this.findError = "List not found"
    })

  }

}
