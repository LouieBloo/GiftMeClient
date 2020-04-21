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
  @Input('width') width:number;
  @Input('editable') editable:boolean;
  @Input('hyphen') hyphen:boolean;
  @Input('text-align') textAlign:string;
  

  @ViewChild('input',{static:false}) textEl: ElementRef;

  @Input('text') text:string;
  minWidth: number = 150;
  editing:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    if(!this.editable){return;}
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
