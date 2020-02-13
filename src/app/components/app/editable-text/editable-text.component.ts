import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent implements OnInit {

  @Input('default') defaultText:string;
  @Input('finishCallback') finishCallback:any;
  @Input('fontSize') fontSize:string;
  @Input('fontColor') fontColor:string;
  @Input('minWidthInput') minWidthInput:number;
  @Input('editable') editable:boolean;

  @ViewChild('hiddenText',{static:true}) textEl: ElementRef;

  text:string;
  private changeTimer:any;
  minWidth: number = 150;
  width: number;

  constructor() { }

  ngOnInit() {
    this.text = this.defaultText;
    this.minWidth = this.minWidthInput;
    this.updateWidth();
  }

  finishEditing(){
    this.finishCallback(this.text);
  }

  textChanged(){
    this.updateWidth();
    clearTimeout(this.changeTimer);
    this.changeTimer = setTimeout(()=>this.finishEditing(),500);
  }

  updateWidth(){
    setTimeout(() => this.width = Math.max(this.minWidth, this.textEl.nativeElement.offsetWidth));
  }
}
