import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IconsService } from 'src/app/services/icons/icons.service';
import { WishListItem } from 'src/app/models/wish-list';

@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.css']
})
export class EditIconComponent implements OnInit {

  @ViewChild('content',null) input: ElementRef;
  @Input('finishCallback') finishCallback:any;
  @Input('item') item:WishListItem;

  allIcons:String[] = null;

  constructor(private modalService: NgbModal,private iconService:IconsService) { }

  ngOnInit() {
    this.iconService.get(result=>{
      this.allIcons = result;
    })
  }

  open(){
    this.modalService.open(this.input, { centered: true });
  }

  iconClicked(iconName:string){
    this.item.icon = iconName;
    this.finishCallback();
    this.modalService.dismissAll();
  }
}
