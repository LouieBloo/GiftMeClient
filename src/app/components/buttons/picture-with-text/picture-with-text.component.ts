import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-with-text',
  templateUrl: './picture-with-text.component.html',
  styleUrls: ['./picture-with-text.component.css']
})
export class PictureWithTextComponent implements OnInit {

  @Input() pictureUrl :string;
  @Input() text :string;

  constructor() { }

  ngOnInit() {
  }

}
