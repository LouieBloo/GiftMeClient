import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit {

  @Output() callback: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  clicked(){
    this.callback.emit();
  }

}
