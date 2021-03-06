import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture-with-text',
  templateUrl: './picture-with-text.component.html',
  styleUrls: ['./picture-with-text.component.css']
})
export class PictureWithTextComponent implements OnInit {

  @Input() pictureUrl :string;
  @Input() text :string;
  @Input() route :string;
  @Input() icon :string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    this.callback.emit();
  }
}
