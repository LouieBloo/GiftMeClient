import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture-with-text-small',
  templateUrl: './picture-with-text-small.component.html',
  styleUrls: ['./picture-with-text-small.component.css']
})
export class PictureWithTextSmallComponent implements OnInit {

  @Input() pictureUrl :string;
  @Input() text :string;
  @Input() icon :string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    this.callback.emit();
  }

}
