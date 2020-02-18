import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

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

  @ViewChild('input',{static:false}) textEl: ElementRef;

  @Input('text') text:string;
  minWidth: number = 150;
  width: number;
  editing:boolean = false;

  constructor() { }

  ngOnInit() {
    this.minWidth = this.minWidthInput;
  }

  clicked(){
    this.editing = true;
    setTimeout(()=>{
      this.textEl.nativeElement.select();
    })
  }

  finishEditing(){
    this.editing = false;
    this.finishCallback(this.text);
  }

}
