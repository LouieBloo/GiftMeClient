import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FindModalComponent } from '../../modals/find-modal/find-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('findModal',null) findModal:FindModalComponent;

  constructor() { }

  ngOnInit() {
  }

  findButtonClicked(){
    this.findModal.open();
  }

}
