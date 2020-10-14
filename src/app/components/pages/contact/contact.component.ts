import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDate, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @ViewChild("titleTooltip", { static: false }) titleTooltip: NgbTooltip;

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.showTooltip();
  }

  showTooltip = () => {
    if (true) {
      setTimeout(() => {
        this.titleTooltip.open();
      }, 200)
    }
  }

  ngOnInit() {
  }

}
