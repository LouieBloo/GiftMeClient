import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-find-modal',
  templateUrl: './find-modal.component.html',
  styleUrls: ['./find-modal.component.css']
})
export class FindModalComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

}
